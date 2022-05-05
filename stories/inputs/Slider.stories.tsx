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
  args: {},
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

export const storyLeftFill = Object.assign(Template.bind({}), {
  storyName: 'left fill',
  args: {
    value: 50,
    fill: 'left',
  },
});

export const storyRightFill = Object.assign(Template.bind({}), {
  storyName: 'right fill',
  args: {
    value: 50,
    fill: 'right',
  },
});
