import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = args => <Slider {...args} />;

export const Basic = makeStory(Template, {
  args: {},
});

export const Buffered = makeStory(Template, {
  args: {
    buffered: true,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    disabled: true,
  },
});

export const LeftFill = makeStory(Template, {
  args: {
    value: 50,
    fill: 'left',
  },
});

export const RightFill = makeStory(Template, {
  args: {
    value: 50,
    fill: 'right',
  },
});
