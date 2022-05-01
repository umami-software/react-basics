import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressCircle } from '../index';

export default {
  title: 'Inputs/ProgressCircle',
  component: ProgressCircle,
} as ComponentMeta<typeof ProgressCircle>;

const Template: ComponentStory<typeof ProgressCircle> = args => <ProgressCircle {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    label: 'Progress',
    value: 25,
  },
});
