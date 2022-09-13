import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from 'components/input/Dropdown';
import { ListItem } from 'types';
import { makeStory } from '../utils';

export default {
  title: 'Input/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  const [selected, setSelected] = useState<string | undefined>(args.value);

  return <Dropdown {...args} value={selected} onChange={setSelected} style={{ width: 200 }} />;
};

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

export const Basic = makeStory(Template, {
  args: {
    items,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    value: 'two',
  },
});
