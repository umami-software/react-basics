import { StoryFn, Meta } from '@storybook/react';
import { GridTable, GridColumn } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Table/GridTable',
  component: GridTable,
} as Meta<typeof GridTable>;

const data = [
  { id: 123, name: 'Bob', email: 'bob@aol.com' },
  { id: 456, name: 'Joe', email: 'joe@yahoo.com' },
  { id: 789, name: 'Fred', email: 'fred@google.com' },
];

const Template: StoryFn<typeof GridTable> = args => {
  return <GridTable {...args} />;
};

export const Basic = makeStory(Template, {
  args: {
    data,
    children: (
      <>
        <GridColumn name="id" label="ID" />
        <GridColumn name="name" label="Name" />
        <GridColumn name="email" label="Email" />
      </>
    ),
  },
});

export const ColumnWidths = makeStory(Template, {
  args: {
    data,
    children: (
      <>
        <GridColumn name="id" label="ID" width="50px" />
        <GridColumn name="name" label="Name" width="100px" />
        <GridColumn name="email" label="Email" />
      </>
    ),
  },
});
