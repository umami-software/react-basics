import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Status/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = args => <Loading {...args} />;

export const Basic = makeStory(Template);

export const Dots = makeStory(Template, {
  args: {
    variant: 'dots',
  },
});
