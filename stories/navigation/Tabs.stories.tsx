import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, Tabs } from '../../src';
import { makeStory } from '../utils';

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

export const Default = makeStory(Template, {
  args: {
    items,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: [...items, { value: 'four', label: 'Four', disabled: true }],
  },
});

export const Vertical = makeStory(Template, {
  args: {
    items,
    vertical: true,
  },
});
