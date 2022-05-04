import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StatusLight } from '../../src';

export default {
  title: 'Status/StatusLight',
  component: StatusLight,
} as ComponentMeta<typeof StatusLight>;

const Template: ComponentStory<typeof StatusLight> = args => <StatusLight {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    children: 'Status',
  },
});
