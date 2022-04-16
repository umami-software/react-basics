import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Check from 'assets/check.svg';
import { Icon } from '../index';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => (
  <div>
    <Icon {...args} size="xsmall" />
    <Icon {...args} size="small" />
    <Icon {...args} size="medium" />
    <Icon {...args} size="large" />
    <Icon {...args} size="xlarge" />
  </div>
);

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    icon: <Check />,
  },
  parameters: {
    controls: { disable: true },
  },
});
