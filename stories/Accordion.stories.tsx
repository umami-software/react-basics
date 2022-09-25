import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion, TreeItem } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Navigation/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const items: TreeItem[] = [
  {
    value: 'one',
    label: 'One',
    children: [
      { value: 'item1', label: 'Item 1' },
      { value: 'item2', label: 'Item 2' },
      { value: 'item3', label: 'Item 3' },
    ],
  },
  {
    value: 'two',
    label: 'Two',
    children: [
      { value: 'item4', label: 'Item 4' },
      { value: 'item5', label: 'Item 5' },
      { value: 'item6', label: 'Item 6' },
    ],
  },

  {
    value: 'three',
    label: 'Three',
    children: [
      { value: 'item7', label: 'Item 7' },
      { value: 'item8', label: 'Item 8' },
      { value: 'item9', label: 'Item 9' },
    ],
  },
];

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    items: [
      ...items,
      { value: 'four', label: 'Four', disabled: true },
      {
        value: 'five',
        label: 'Five',
        children: [
          { value: 'j', label: 'disabled', disabled: true },
          { value: 'k', label: 'not disabled' },
        ],
      },
    ],
  },
});
