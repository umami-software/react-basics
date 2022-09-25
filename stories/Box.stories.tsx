import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Layout/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => {
  return <Box {...args} />;
};

export const Basic = makeStory(Template, {
  args: {
    children: 'Box',
  },
});

export const CSSProperties = makeStory(Template, {
  args: {
    children: 'Box',
    width: 100,
    height: 100,
    color: 'white',
    backgroundColor: 'dodgerblue',
    padding: 20,
    borderRadius: 10,
  },
});
