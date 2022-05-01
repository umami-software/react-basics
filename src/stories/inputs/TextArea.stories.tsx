import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../index';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    label: 'Text area',
  },
});

export const storyWithValue = Object.assign(Template.bind({}), {
  storyName: 'with value',
  args: {
    label: 'Text area',
    defaultValue: 'Here is some text.',
  },
});

export const storyWithRows = Object.assign(Template.bind({}), {
  storyName: 'custom rows',
  args: {
    label: 'Text area',
    rows: 8,
  },
});

export const storyNoResize = Object.assign(Template.bind({}), {
  storyName: 'resizeable',
  args: {
    label: 'Text area',
    resizeable: true,
  },
});
