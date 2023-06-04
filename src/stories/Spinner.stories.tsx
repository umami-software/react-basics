import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Spinner } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

const Template: StoryFn<typeof Spinner> = args => <Spinner {...args} />;

export const Basic = makeStory(Template);

export const Quiet = makeStory(Template, {
  args: {
    quiet: true,
  },
});
