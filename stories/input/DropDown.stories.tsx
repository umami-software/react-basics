import React, { Key, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from 'types';
import { makeStory } from '../utils';
import { Item, Dropdown } from '../../src';

export default {
  title: 'Input/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  const [value, setValue] = useState<Key>(args.value);

  return <Dropdown {...args} value={value} onChange={setValue} style={{ width: 200 }} />;
};

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

export const Basic = makeStory(Template, {
  args: {
    items,
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    value: 'two',
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});
