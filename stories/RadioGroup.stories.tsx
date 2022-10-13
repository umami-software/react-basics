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
  { key: 'one', label: 'One' },
  { key: 'two', label: 'Two' },
  { key: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof RadioGroup> = args => {
  const [selected, setSelected] = useState(args.selectedKey);

  return <RadioGroup {...args} selectedKey={selected} onSelect={setSelected} />;
};

export const Basic = makeStory(Template, {
  args: {
    items,
    name: 'name',
    children: ({ key, label }) => <Radio key={key}>{label}</Radio>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    name: 'name',
    selectedKey: 'three',
    children: ({ key, label }) => <Radio key={key}>{label}</Radio>,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ key: 'four', label: 'Four', disabled: true }),
    name: 'name',
    selectedKey: 'three',
    children: ({ key, label, disabled }) => (
      <Radio key={key} disabled={disabled}>
        {label}
      </Radio>
    ),
  },
});
export const Horizontal = makeStory(Template, {
  args: {
    items,
    name: 'name',
    layout: 'horizontal',
    children: ({ key, label, disabled }) => (
      <Radio key={key} disabled={disabled}>
        {label}
      </Radio>
    ),
  },
});
