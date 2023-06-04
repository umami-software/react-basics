import { StoryFn, Meta } from '@storybook/react';
import { ProgressCircle } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/ProgressCircle',
  component: ProgressCircle,
} as Meta<typeof ProgressCircle>;

const Template: StoryFn<typeof ProgressCircle> = args => <ProgressCircle {...args} />;

export const Basic = makeStory(Template, {
  args: {
    value: 25,
  },
});

export const Label = makeStory(Template, {
  args: {
    value: 25,
    showValueLabel: true,
  },
});
