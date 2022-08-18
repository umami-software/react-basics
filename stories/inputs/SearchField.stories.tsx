import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchField } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/SearchField',
  component: SearchField,
} as ComponentMeta<typeof SearchField>;

const Template: ComponentStory<typeof SearchField> = args => (
  <SearchField {...args} style={{ width: 300 }} />
);

export const Basic = makeStory(Template);

export const WithDelay = makeStory(Template, {
  args: {
    delay: 1000,
  },
});
