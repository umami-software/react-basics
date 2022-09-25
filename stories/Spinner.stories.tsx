import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Status/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />;

export const Basic = makeStory(Template);

export const Quiet = makeStory(Template, {
  args: {
    quiet: true,
  },
});
