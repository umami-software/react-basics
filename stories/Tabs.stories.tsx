import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, Item } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Navigation/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const items: any[] = [
  { key: 'one', label: 'One' },
  { key: 'two', label: 'Two' },
  { key: 'three', label: 'Three' },
];

const Template: ComponentStory<typeof Tabs> = args => {
  const [selected, setSelected] = useState(args.selectedKey);

  return <Tabs {...args} selectedKey={selected} onSelect={setSelected} />;
};

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const Preselected = makeStory(Template, {
  args: {
    items: [...items],
    selectedKey: 'three',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: [...items, { key: 'four', label: 'Four', disabled: true }],
  },
});

export const Vertical = makeStory(Template, {
  args: {
    items,
    vertical: true,
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
