import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  TableWindow,
} from '../src';
import { makeStory } from './utils';
import { faker } from '@faker-js/faker';

faker.seed(123);

const rows = [...Array(100)].map(() => ({
  id: faker.mersenne.rand(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
}));

const columns = [
  { name: 'id', label: 'ID' },
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
];

const styles = [{ flex: 1 }, { flex: 1 }, { flex: 2 }];

const widthStyles = [{ flex: 1 }, { flex: 2 }, { flex: 5 }];

export default {
  title: 'Table/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => (
  <Table {...args} rows={rows} columns={columns} />
);

export const Basic = makeStory(Template);

export const RenderFunctions = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader columns={columns}>
          {column => <TableColumn>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody rows={rows} columns={columns}>
          {(row, keys) => (
            <TableRow data={row} keys={keys}>
              {(data, key) => <TableCell>{data[key]}</TableCell>}
            </TableRow>
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

export const ColumnWidths = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader columns={columns}>
          {(column, index) => (
            <TableColumn style={{ ...widthStyles[index] }}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody rows={rows.slice(0, 5)}>
          {(row, keys) => (
            <TableRow data={row} keys={keys}>
              {(item, key, index) => (
                <TableCell style={{ ...widthStyles[index] }}>{item[key]}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </>
    ),
  },
});

export const Window = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader
          columns={columns}
          style={{ width: 800, overflowY: 'hidden', scrollbarGutter: 'stable' }}
        >
          {(column, index) => (
            <TableColumn style={{ ...styles[index] }}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableWindow
          width={800}
          height={600}
          rowCount={rows.length}
          rowSize={50}
          style={{ overflowY: 'scroll', scrollbarGutter: 'stable' }}
        >
          {({ index, style }) => {
            return (
              <TableRow data={rows[index]} style={style}>
                {(item, key, i) => <TableCell style={{ ...styles[i] }}>{item[key]}</TableCell>}
              </TableRow>
            );
          }}
        </TableWindow>
      </>
    ),
  },
});
