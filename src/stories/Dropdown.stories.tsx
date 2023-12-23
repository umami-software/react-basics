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
  const [value, setValue] = useState<any>(args.value);
  const [search, setSearch] = useState('');

  const renderValue = v => items.find(e => e.value === v)?.label;

  const filteredItems = search
    ? items.filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
    : items;

  return (
    <div style={{ width: 200 }}>
      <Dropdown
        {...args}
        items={filteredItems}
        renderValue={renderValue}
        name="dropdown"
        value={value}
        onChange={setValue}
        onSearch={setSearch}
      />
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const Preselect = makeStory(Template, {
  args: {
    value: 'two',
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const WithSearch = makeStory(Template, {
  args: {
    allowSearch: true,
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});

export const IsLoading = makeStory(Template, {
  args: {
    isLoading: true,
    allowSearch: true,
    children: ({ value, label }) => <Item key={value}>{label}</Item>,
  },
});
