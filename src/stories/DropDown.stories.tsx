import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from 'components/input/Dropdown';
import { MenuItem } from 'types';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => {
  const [key, setKey] = useState<string | undefined>();

  return <Dropdown {...args} selectedKey={key} onChange={setKey} />;
};

const items: MenuItem[] = [
  { key: 'one', label: 'One' },
  { key: 'two', label: 'Two' },
  { key: 'three', label: 'Three' },
];

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    items,
  },
});
