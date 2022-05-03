import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toggle } from '../../src';

export default {
  title: 'Inputs/Toggle',
  component: Toggle,
  argTypes: { onChange: { action: 'yo' } },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = args => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = () => setChecked(!checked);

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    children: 'Toggle',
  },
});
