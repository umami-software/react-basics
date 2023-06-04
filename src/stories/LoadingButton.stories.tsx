import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LoadingButton, Icon } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/LoadingButton',
  component: LoadingButton,
} as Meta<typeof LoadingButton>;

const Template: StoryFn<typeof LoadingButton> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    <LoadingButton loading={true} {...args} size="sm">
      Small
    </LoadingButton>
    <LoadingButton loading={true} {...args} size="md">
      Medium
    </LoadingButton>
    <LoadingButton loading={true} {...args} size="lg">
      Large
    </LoadingButton>
  </div>
);

export const Spinner = makeStory(Template, {
  args: {
    icon: 'spinner',
  },
});

export const Dots = makeStory(Template, {
  args: {
    icon: 'dots',
  },
});
