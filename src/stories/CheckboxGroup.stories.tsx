import React, { Key, useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CheckboxGroup, Checkbox } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/CheckboxGroup',
  component: CheckboxGroup,
} as Meta<typeof CheckboxGroup>;

const items: any[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: StoryFn<typeof CheckboxGroup> = args => {
  const [selected, setSelected] = useState<Key[]>([]);

  return <CheckboxGroup {...args} selectedKeys={selected} onChange={setSelected} />;
};

export const Basic = makeStory(Template, {
  args: {
    items,
    name: 'name',
    children: ({ label, value }) => <Checkbox value={value}>{label}</Checkbox>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    name: 'name',
    value: ['three'],
    children: ({ label, value }) => <Checkbox value={value}>{label}</Checkbox>,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    name: 'name',
    value: ['three'],
    children: ({ label, value, disabled }) => (
      <Checkbox value={value} disabled={disabled}>
        {label}
      </Checkbox>
    ),
  },
});
