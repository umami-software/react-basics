import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SearchField } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/SearchField',
  component: SearchField,
} as Meta<typeof SearchField>;

const Template: StoryFn<typeof SearchField> = args => (
  <SearchField {...args} style={{ width: 300 }} />
);

export const Basic = makeStory(Template);

export const WithDelay = makeStory(Template, {
  args: {
    delay: 1000,
  },
});
