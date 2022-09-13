import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List, ListItem } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'List/List',
  component: List,
} as ComponentMeta<typeof List>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof List> = args => <List {...args} style={{ width: 200 }} />;

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    value: 'three',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    value: 'three',
  },
});
