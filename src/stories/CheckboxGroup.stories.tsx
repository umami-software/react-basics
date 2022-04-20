import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, CheckboxGroup } from '../index';

export default {
  title: 'Inputs/CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof CheckboxGroup> = args => <CheckboxGroup {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
    name: 'name',
    label: 'Checkbox group',
  },
});

export const storyPreselect = Object.assign(Template.bind({}), {
  storyName: 'preselected',
  args: {
    items,
    name: 'name',
    value: ['three'],
    label: 'Checkbox group',
  },
});
