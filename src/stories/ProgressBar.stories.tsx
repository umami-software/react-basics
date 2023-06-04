import { StoryFn, Meta } from '@storybook/react';
import { ProgressBar } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/ProgressBar',
  component: ProgressBar,
} as Meta<typeof ProgressBar>;

const Template: StoryFn<typeof ProgressBar> = args => <ProgressBar {...args} />;

export const Basic = makeStory(Template, {
  args: {
    value: 25,
  },
});
