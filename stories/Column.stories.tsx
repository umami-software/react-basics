import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Column } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Layout/Column',
  component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = args => {
  return <Column {...args} />;
};

export const Basic = makeStory(Template, {
  args: {
    children: 'Column',
  },
});
