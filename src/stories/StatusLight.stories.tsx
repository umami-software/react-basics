import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { StatusLight } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/StatusLight',
  component: StatusLight,
} as Meta<typeof StatusLight>;

const Template: StoryFn<typeof StatusLight> = args => <StatusLight {...args} />;

export const Basic = makeStory(Template, {
  args: {
    children: 'Status',
  },
});
