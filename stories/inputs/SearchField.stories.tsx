import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchField } from '../../src';

export default {
  title: 'Inputs/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = args => <SearchField {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
});

export const storyWithDelay = Object.assign(Template.bind({}), {
  storyName: 'with delay',
  args: {
    delay: 1000,
  },
});
