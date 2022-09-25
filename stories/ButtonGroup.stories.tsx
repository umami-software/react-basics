import React from 'react';
import { useArgs } from '@storybook/client-api';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonGroup, Icon } from '../src';
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

const icons = ['checkmark', 'plus', 'cross'];

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
      <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} size="small" />
      <h3>medium</h3>
      <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} size="medium" />
      <h3>large</h3>
      <ButtonGroup {...args} onSelect={handleSelet} selectedKey={selected} size="large" />
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    items,
    children: ({ label, value }) => <Button key={value}>{label}</Button>,
  },
});

export const Icons = makeStory(Template, {
  args: {
    items: items.map((item, index) => ({
      ...item,
      label: <Icon icon={icons[index]} size="medium" />,
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
