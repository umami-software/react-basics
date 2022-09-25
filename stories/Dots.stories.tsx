import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dots } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Status/Dots',
  component: Dots,
} as ComponentMeta<typeof Dots>;

const Template: ComponentStory<typeof Dots> = args => <Dots {...args} />;

export const Basic = makeStory(Template, {
  args: {},
});
