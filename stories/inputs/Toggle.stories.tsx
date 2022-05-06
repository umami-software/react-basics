import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Toggle } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/Toggle',
  component: Toggle,
  argTypes: { onChange: { action: 'yo' } },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = args => {
  const [{ checked }, updateArgs] = useArgs();

  const handleChange = value => updateArgs({ checked: value });

  return <Toggle {...args} checked={checked} onChange={handleChange} />;
};

export const Basic = makeStory(Template, {
  args: {
    children: 'Toggle',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    children: 'Toggle',
    disabled: true,
  },
});
