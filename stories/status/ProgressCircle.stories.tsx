import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressCircle } from '../../src';

export default {
  title: 'Status/ProgressCircle',
  component: ProgressCircle,
} as ComponentMeta<typeof ProgressCircle>;

const Template: ComponentStory<typeof ProgressCircle> = args => <ProgressCircle {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    value: 25,
  },
});

export const storyNoLabel = Object.assign(Template.bind({}), {
  storyName: 'with label',
  args: {
    value: 25,
    showValueLabel: true,
  },
});
