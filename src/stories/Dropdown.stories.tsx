import React, { Key, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { makeStory } from './utils';
import { Item, Dropdown } from '../index';

const items: any[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

export default {
  title: 'Input/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = args => {
  const [value, setValue] = useState<any>(args.value);

  const renderValue = v => items.find(e => e.value === v)?.label;

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        {...args}
        renderValue={renderValue}
        name="dropdown"
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

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