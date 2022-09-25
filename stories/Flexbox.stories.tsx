import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flexbox, Box } from '../src';
import { makeStory, map } from './utils';

export default {
  title: 'Layout/Flexbox',
  component: Flexbox,
} as ComponentMeta<typeof Flexbox>;

const Template: ComponentStory<typeof Flexbox> = args => {
  return <Flexbox {...args} />;
};

export const Basic = makeStory(Template, {
  args: {
    children: map(5, i => <Box key={i}>Box</Box>),
  },
});
