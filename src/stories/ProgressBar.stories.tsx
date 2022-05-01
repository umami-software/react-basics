import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from '../index';

export default {
  title: 'Inputs/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args => <ProgressBar {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    value: 25,
  },
});

export const storyLabels = Object.assign(Template.bind({}), {
  storyName: 'with labels',
  args: {
    value: 25,
    label: 'Progress',
    showValueLabel: true,
  },
});

export const storyLabelPosition = Object.assign(Template.bind({}), {
  storyName: 'side label position',
  args: {
    value: 25,
    label: 'Progress',
    showValueLabel: true,
    labelPosition: 'side',
  },
});
