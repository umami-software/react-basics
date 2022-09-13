import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, RadioGroup } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Input/RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof RadioGroup> = args => <RadioGroup {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
    name: 'name',
    label: 'Radio Group',
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    name: 'name',
    value: 'three',
    label: 'Radio Group',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: items.concat({ value: 'four', label: 'Four', disabled: true }),
    name: 'name',
    value: 'three',
    label: 'Radio Group',
  },
});
