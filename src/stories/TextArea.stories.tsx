import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../index';

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
