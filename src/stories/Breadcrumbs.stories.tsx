import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Breadcrumbs, Item } from '../index';
import { makeStory } from './utils';

const items: any[] = [
  { key: 'one', label: 'One' },
  { key: 'two', label: 'Two' },
  { key: 'three', label: 'Three' },
];

const render = item => <Item key={item.key}>{item.label}</Item>;

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as Meta<typeof Breadcrumbs>;

const Template: StoryFn<typeof Breadcrumbs> = args => <Breadcrumbs {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
    children: render,
  },
});

export const Tags = makeStory(Template, {
  args: {
    children: (
      <>
        <Item key="one">One</Item>
        <Item key="two">Two</Item>
        <Item key="three">Three</Item>
      </>
    ),
  },
});
