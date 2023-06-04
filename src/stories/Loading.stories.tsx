import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Loading } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/Loading',
  component: Loading,
} as Meta<typeof Loading>;

const Template: StoryFn<typeof Loading> = args => <Loading {...args} />;

export const Basic = makeStory(Template);

export const Dots = makeStory(Template, {
  args: {
    icon: 'dots',
  },
});
