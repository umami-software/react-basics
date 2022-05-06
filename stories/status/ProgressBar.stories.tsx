import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Status/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args => <ProgressBar {...args} />;

export const Basic = makeStory(Template, {
  args: {
    value: 25,
  },
});

export const Labels = makeStory(Template, {
  args: {
    value: 25,
    label: 'Progress',
    showValueLabel: true,
  },
});

export const LabelPosition = makeStory(Template, {
  args: {
    value: 25,
    label: 'Progress',
    showValueLabel: true,
    labelPosition: 'side',
  },
});
