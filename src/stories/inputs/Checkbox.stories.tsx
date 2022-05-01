import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '../../index';

export default {
  title: 'Inputs/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = () => setChecked(!checked);

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    name: 'name',
    value: 'value',
    children: 'Checkbox',
  },
});

export const storyPreselect = Object.assign(Template.bind({}), {
  storyName: 'preselected',
  args: {
    name: 'name',
    value: 'value',
    children: 'Checkbox',
    checked: true,
  },
});
