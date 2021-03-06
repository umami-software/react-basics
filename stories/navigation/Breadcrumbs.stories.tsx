import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem, Breadcrumbs } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof Breadcrumbs> = args => <Breadcrumbs {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});
