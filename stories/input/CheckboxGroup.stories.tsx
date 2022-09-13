import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, CheckboxGroup } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Input/CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof CheckboxGroup> = args => <CheckboxGroup {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
    name: 'name',
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    name: 'name',
    value: ['three'],
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    name: 'name',
    value: ['three'],
  },
});
