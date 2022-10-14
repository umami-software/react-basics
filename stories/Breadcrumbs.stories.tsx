import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Breadcrumbs, Item } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const items: any[] = [
  { key: 'one', label: 'One' },
  { key: 'two', label: 'Two' },
  { key: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof Breadcrumbs> = args => <Breadcrumbs {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const RenderFunction = makeStory(Template, {
  args: {
    items,
    children: item => {
      return <Item key={item.key}>{item.label}</Item>;
    },
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
