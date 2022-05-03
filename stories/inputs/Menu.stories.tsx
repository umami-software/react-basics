import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, ListItem } from '../../src';

export default {
  title: 'Inputs/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
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

export const storyPreselect = Object.assign(Template.bind({}), {
  storyName: 'preselect',
  args: {
    items,
    value: 'three',
  },
});
