import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '../../src';

export default {
  title: 'Status/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {},
});

export const storyQuiet = Object.assign(Template.bind({}), {
  storyName: 'quiet',
  args: {
    quiet: true,
  },
});
