import React from 'react';
import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonGroup, Icon, Icons } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Input/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const items: any[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

const icons = [Icons.Check, Icons.Plus, Icons.Minus];

const Template: ComponentStory<typeof ButtonGroup> = args => {
  const [{ selected }, updateArgs] = useArgs();

  const handleSelet = value => updateArgs({ selected: value });

  return <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} />;
};

const Template2: ComponentStory<typeof ButtonGroup> = args => {
  const [{ selected }, updateArgs] = useArgs();

  const handleSelet = value => updateArgs({ selected: value });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
      <h3>small</h3>
      <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} size="sm" />
      <h3>medium</h3>
      <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} size="md" />
      <h3>large</h3>
      <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} size="lg" />
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    items,
    children: ({ label, value }) => <Button key={value}>{label}</Button>,
  },
});

export const IconsOnly = makeStory(Template, {
  args: {
    items: items.map((item, index) => ({
      ...item,
      label: <Icon size="md">{icons[index]}</Icon>,
    })),
    children: ({ label, value }) => <Button key={value}>{label}</Button>,
  },
});

export const AllSizes = makeStory(Template2, {
  args: {
    items,
    children: ({ label, value }) => <Button key={value}>{label}</Button>,
  },
});
