import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '../../src';

export default {
  title: 'Inputs/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    defaultValue: 10,
  },
});

export const storyBuffered = Object.assign(Template.bind({}), {
  storyName: 'buffered',
  args: {
    buffered: true,
  },
});

export const storyDisabled = Object.assign(Template.bind({}), {
  storyName: 'disabled',
  args: {
    disabled: true,
  },
});
