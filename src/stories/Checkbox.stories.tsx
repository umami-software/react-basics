import React from 'react';
import { useArgs } from '@storybook/client-api';
import { StoryFn, Meta } from '@storybook/react';
import { Checkbox } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/Checkbox',
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = args => {
  const [{ checked }, updateArgs] = useArgs();

  const handleChange = e => {
    updateArgs({ checked: e.target.checked });
  };

  return <Checkbox {...args} checked={checked} onChange={handleChange} />;
};

export const Basic = makeStory(Template, {
  args: {
    value: 'value',
    children: 'Checkbox',
  },
});

export const Preselect = makeStory(Template, {
  args: {
    value: 'value',
    children: 'Checkbox',
    defaultChecked: true,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    value: 'value',
    children: 'Checkbox',
    disabled: true,
  },
});
