import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, ListItem } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Input/Menu',
  component: Menu,
} as ComponentMeta<typeof Menu>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof Menu> = args => <Menu {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const WithDivider = makeStory(Template, {
  args: {
    items: [...items, { value: 'four', label: 'Four', divider: true }],
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    value: 'three',
  },
});
