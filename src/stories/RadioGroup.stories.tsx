import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, RadioGroup } from '../index';

export default {
  title: 'Inputs/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof RadioGroup> = args => <RadioGroup {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
    name: 'name',
    label: 'Radio Group',
  },
});

export const storyPreselect = Object.assign(Template.bind({}), {
  storyName: 'preselected',
  args: {
    items,
    name: 'name',
    value: 'three',
    label: 'Radio Group',
  },
});
