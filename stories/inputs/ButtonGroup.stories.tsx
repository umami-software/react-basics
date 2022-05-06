import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup, Icon, ListItem } from '../../src';
import { makeStory } from '../utils';

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

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const Quiet = makeStory(Template, {
  args: {
    items,
    quiet: true,
  },
});

export const MultiSelect = makeStory(Template, {
  args: {
    items,
    selectionMode: 'multi',
  },
});

export const Icons = makeStory(Template, {
  args: {
    items: items.map(item => ({ ...item, label: <Icon icon="checkmark" size="medium" /> })),
  },
});
