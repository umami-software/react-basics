import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Dots } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/Dots',
  component: Dots,
} as Meta<typeof Dots>;

const Template: StoryFn<typeof Dots> = args => <Dots {...args} />;

export const Basic = makeStory(Template, {
  args: {},
});
