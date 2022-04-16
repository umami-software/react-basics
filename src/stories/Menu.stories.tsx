import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, MenuItem } from '../index';

export default {
  title: 'Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const items: MenuItem[] = [
  { key: 'one', label: 'One' },
  { key: 'two', label: 'Two' },
  { key: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
  },
});

export const storyWithDivider = Object.assign(Template.bind({}), {
  storyName: 'with divider',
  args: {
    items: [...items, { key: 'four', label: 'Four', divider: true }],
  },
});
