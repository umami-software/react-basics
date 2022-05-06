import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatusLight } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Status/StatusLight',
  component: StatusLight,
} as ComponentMeta<typeof StatusLight>;

const Template: ComponentStory<typeof StatusLight> = args => <StatusLight {...args} />;

export const Basic = makeStory(Template, {
  args: {
    children: 'Status',
  },
});
