import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup, ListItem } from '../index';

export default {
  title: 'Inputs/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof ButtonGroup> = args => <ButtonGroup {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
  },
});
