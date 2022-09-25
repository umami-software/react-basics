import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio, RadioGroup } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Input/RadioGroup',
  component: RadioGroup,
  parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof RadioGroup>;

const items: any[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof RadioGroup> = args => {
  const [selected, setSelected] = useState(args.value);
  return <RadioGroup {...args} value={selected} onChange={setSelected} />;
};

export const Basic = makeStory(Template, {
  args: {
    items,
    name: 'name',
    children: ({ value, label }) => <Radio value={value}>{label}</Radio>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    name: 'name',
    value: 'three',
    children: ({ value, label }) => <Radio value={value}>{label}</Radio>,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    name: 'name',
    value: 'three',
    children: ({ value, label, disabled }) => (
      <Radio value={value} disabled={disabled}>
        {label}
      </Radio>
    ),
  },
});
