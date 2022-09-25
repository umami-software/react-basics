import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressCircle } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Status/ProgressCircle',
  component: ProgressCircle,
} as ComponentMeta<typeof ProgressCircle>;

const Template: ComponentStory<typeof ProgressCircle> = args => <ProgressCircle {...args} />;

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
