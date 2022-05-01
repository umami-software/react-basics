import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup, Icon, ListItem } from '../index';

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

export const storyQuiet = Object.assign(Template.bind({}), {
  storyName: 'quiet',
  args: {
    items,
    quiet: true,
  },
});

export const storyMultiSelect = Object.assign(Template.bind({}), {
  storyName: 'multi-select',
  args: {
    items,
    multiSelect: true,
  },
});

export const storyIcons = Object.assign(Template.bind({}), {
  storyName: 'icons',
  args: {
    items: items.map(item => ({ ...item, label: <Icon icon="checkmark" size="medium" /> })),
  },
});
