import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from 'components/input/Dropdown';
import { ListItem } from 'types';

export default {
  title: 'Inputs/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  const [selected, setSelected] = useState<string | undefined>(args.value);

  return <Dropdown {...args} value={selected} onChange={setSelected} />;
};

const items: ListItem[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
  },
});

export const storyPreselect = Object.assign(Template.bind({}), {
  storyName: 'preselected',
  args: {
    items,
    value: 'two',
  },
});
