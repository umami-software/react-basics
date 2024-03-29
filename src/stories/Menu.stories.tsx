import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Menu, Item } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/Menu',
  component: Menu,
} as Meta<typeof Menu>;

const items: any[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: StoryFn<typeof Menu> = args => {
  const [key, setKey] = useState(args.selectedKey);

  return <Menu {...args} selectedKey={key} onSelect={setKey} style={{ width: 200 }} />;
};

export const Basic = makeStory(Template, {
  args: {
    items,
    children: ({ label }) => <Item>{label}</Item>,
  },
});

export const Divider = makeStory(Template, {
  args: {
    items: [...items, { value: 'four', label: 'Four', divider: true }],
    children: ({ label, divider }) => <Item divider={divider}>{label}</Item>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    selectedKey: 'three',
    children: ({ label, value }) => <Item key={value}>{label}</Item>,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    value: 'three',
    children: ({ label, disabled }) => <Item disabled={disabled}>{label}</Item>,
  },
});
