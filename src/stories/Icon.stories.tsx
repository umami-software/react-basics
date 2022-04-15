import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Check from 'assets/check.svg';
import { Icon } from '../index';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: <Check />,
};
