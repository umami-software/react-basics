import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Tree, TreeItem } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Navigation/Tree',
  component: Tree,
} as Meta<typeof Tree>;

const items: TreeItem[] = [
  {
    value: 'one',
    label: 'One',
    children: [
      { value: 'item1', label: 'item 1' },
      { value: 'item2', label: 'item 2' },
    ],
  },
  {
    value: 'two',
    label: 'Two',
    children: [
      { value: 'item3', label: 'item 3' },
      { value: 'item4', label: 'item 4' },
    ],
  },
  { value: 'three', label: 'Three' },
];

const Template: StoryFn<typeof Tree> = args => <Tree {...args} />;

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});
