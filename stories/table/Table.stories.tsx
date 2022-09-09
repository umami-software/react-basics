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
}));

const columns = [
  { name: 'id', label: 'ID' },
  { name: 'name', label: 'Name' },
  { name: 'email', label: 'Email' },
];

const widths = [1, 2, 5];
const align = ['left', 'center', 'right'] as any;

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

export const ColumnWidths = makeStory(Template, {
  args: {
    children: (
      <>
        <TableHeader columns={columns}>
          {(column, i) => <TableColumn style={{ flex: widths[i] }}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={rows.slice(0, 5)}>
          {row => (
            <TableRow item={row}>
              {(item, key, i) => <TableCell style={{ flex: widths[i] }}>{item[key]}</TableCell>}
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
        <TableBody items={rows.slice(0, 5)}>
          {row => (
            <TableRow item={row}>
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
      <TableWindow width={800} height={600} itemCount={rows.length} itemSize={50}>
        {({ index, style }) => (
          <TableRow item={rows[index]} style={style}>
            {(item, key, i) => <TableCell flex={widths[i]}>{item[key]}</TableCell>}
          </TableRow>
        )}
      </TableWindow>
    ),
  },
});
