import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { LoadingButton } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/LoadingButton',
  component: LoadingButton,
} as Meta<typeof LoadingButton>;

const Template: StoryFn<typeof LoadingButton> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    <LoadingButton isLoading={true} {...args} size="sm">
      Small
    </LoadingButton>
    <LoadingButton isLoading={true} {...args} size="md">
      Medium
    </LoadingButton>
    <LoadingButton isLoading={true} {...args} size="lg">
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
