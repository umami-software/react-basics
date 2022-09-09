import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '../../src';
import { makeStory } from '../utils';

const rows = [
  { id: 1, name: 'Bob', email: 'bob@aol.com' },
  { id: 2, name: 'Fed', email: 'ted@yahoo.com' },
  { id: 3, name: 'Ted', email: 'ted@compuserve.com' },
  { id: 4, name: 'Joe', email: 'joe@prodigy.net' },
];

const columns = [
  { name: 'id', label: 'ID' },
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
];

export default {
  title: 'Table/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => (
  <Table {...args} rows={rows} columns={columns} labelKey="label" />
);

export const Basic = makeStory(Template);

export const RenderFunctions = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader columns={columns}>
          {column => <TableColumn>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows}>
          {row => (
            <TableRow item={row}>{(item, key) => <TableCell>{item[key]}</TableCell>}</TableRow>
          )}
        </TableBody>
      </>
    ),
  },
});

export const PureTags = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader>
          <TableColumn>A</TableColumn>
          <TableColumn>B</TableColumn>
          <TableColumn>C</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>2</TableCell>
            <TableCell>3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
});
