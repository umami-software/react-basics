import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Menu, ListItem, Item } from '../../src';
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
    children: ({ label }) => <Item>{label}</Item>,
  },
});

export const Divider = makeStory(Template, {
  args: {
    items: [...items, { value: 'four', label: 'Four', divider: true }],
    children: ({ label, divider }) => <Item divider={divider}>{label}</Item>,
  },
});

export const PreselectByIndex = makeStory(Template, {
  args: {
    items,
    selectedItem: 1,
    children: ({ label }) => <Item>{label}</Item>,
  },
});

export const PreselectByValue = makeStory(Template, {
  args: {
    items,
    selectedItem: 'three',
    children: ({ label, value }) => <Item value={value}>{label}</Item>,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    value: 'three',
    children: ({ label, disabled }) => <Item disabled={disabled}>{label}</Item>,
  },
});

export const PureTags = makeStory(Template, {
  args: {
    children: (
      <>
        <Item>A</Item>
        <Item>B</Item>
        <Item>C</Item>
        <Item>D</Item>
      </>
    ),
  },
});
