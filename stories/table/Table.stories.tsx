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
} from '../../src';
import { makeStory } from '../utils';
import { faker } from '@faker-js/faker';

faker.seed(123);

const rows = [...Array(100)].map(() => ({
  id: faker.mersenne.rand(),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  ip: faker.internet.ipv4(),
}));

const columns = [
  { name: 'id', label: 'ID' },
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
];

const flex = [1, 2, 5];
const align = ['left', 'center', 'right'] as any;

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
          {row => (
            <TableRow data={row}>{(data, key) => <TableCell>{data[key]}</TableCell>}</TableRow>
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
          {(column, i) => <TableColumn flex={flex[i]}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody rows={rows.slice(0, 5)}>
          {row => (
            <TableRow data={row}>
              {(item, key, i) => <TableCell flex={flex[i]}>{item[key]}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </>
    ),
  },
});

export const Alignment = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader columns={columns}>
          {(column, i) => <TableColumn textAlign={align[i]}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody rows={rows.slice(0, 5)}>
          {row => (
            <TableRow data={row}>
              {(item, key, i) => <TableCell textAlign={align[i]}>{item[key]}</TableCell>}
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
        <TableHeader columns={columns} style={{ width: 800 }}>
          {(column, i) => <TableColumn flex={flex[i]}>{column.label}</TableColumn>}
        </TableHeader>
        <TableWindow width={800} height={600} rowCount={rows.length} rowSize={50}>
          {({ index, style }) => {
            return (
              <TableRow data={rows[index]} style={style}>
                {(item, key, i) => i < 3 && <TableCell flex={flex[i]}>{item[key]}</TableCell>}
              </TableRow>
            );
          }}
        </TableWindow>
      </>
    ),
  },
});
