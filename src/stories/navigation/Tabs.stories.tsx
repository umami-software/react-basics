import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, Tabs } from '../../index';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
  },
});

export const storyDisabled = Object.assign(Template.bind({}), {
  storyName: 'disabled tab',
  args: {
    items: [...items, { value: 'four', label: 'Four', disabled: true }],
  },
});

export const storyVertical = Object.assign(Template.bind({}), {
  storyName: 'vertical orientation',
  args: {
    items,
    vertical: true,
  },
});
