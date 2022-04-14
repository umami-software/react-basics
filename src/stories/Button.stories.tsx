import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/input/Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
