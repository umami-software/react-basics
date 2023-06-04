import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { Toggle } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/Toggle',
  component: Toggle,
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = args => {
  const [{ checked }, updateArgs] = useArgs();

  const handleChange = value => updateArgs({ checked: value });

  return <Toggle {...args} checked={checked} onChecked={handleChange} />;
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
