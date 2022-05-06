import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => <TextField {...args} />;

export const Basic = makeStory(Template, {
  args: {
    label: 'Text field',
  },
});
