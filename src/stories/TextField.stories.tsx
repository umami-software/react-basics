import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '../index';

export default {
  title: 'Inputs/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    label: 'Text field',
  },
});
