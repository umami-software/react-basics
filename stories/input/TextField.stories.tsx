import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Input/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} style={{ width: 300 }} />
);

export const Basic = makeStory(Template);

export const Disabled = makeStory(Template, {
  args: {
    disabled: true,
  },
});
