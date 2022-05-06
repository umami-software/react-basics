import React from 'react';
import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
  argTypes: { onChange: { action: 'yo' } },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => {
  const [{ checked }, updateArgs] = useArgs();

  const handleChange = value => updateArgs({ checked: value });

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Basic = makeStory(Template, {
  args: {
    name: 'name',
    value: 'value',
    children: 'Checkbox',
  },
});

export const Preselect = makeStory(Template, {
  args: {
    name: 'name',
    value: 'value',
    children: 'Checkbox',
    checked: true,
  },
});
