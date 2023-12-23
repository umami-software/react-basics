import { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { makeStory } from './utils';
import { Item, Dropdown } from '../index';

const items: any[] = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
  { value: 'three', label: 'Three' },
];

export default {
  title: 'Input/Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = args => {
  const { value, items } = args;
  const [selected, setSelected] = useState<any>(value);
  const [search, setSearch] = useState('');

  const renderValue = v => items?.find(e => e.value === v)?.label;

  const filteredItems = search
    ? items?.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
    : items;

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        {...args}
        items={filteredItems}
        renderValue={renderValue}
        name="dropdown"
        value={selected}
        onSelect={setSelected}
        onSearch={setSearch}
        renderEmpty={() => <div style={{ textAlign: 'center', padding: 20 }}>No results.</div>}
      />
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    items,
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    items,
    value: 'two',
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const WithSearch = makeStory(Template, {
  args: {
    items,
    allowSearch: true,
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const IsLoading = makeStory(Template, {
  args: {
    items,
    isLoading: true,
    allowSearch: true,
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});
