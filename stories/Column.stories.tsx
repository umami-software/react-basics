import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Column, Row, Container, useBreakpoint } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Layout/Columns',
  component: Column,
} as ComponentMeta<typeof Column>;

const columnStyle = {
  border: '1px solid lightgray',
  borderRadius: 10,
  padding: 20,
  textAlign: 'center' as const,
};

const Template: ComponentStory<typeof Column> = args => {
  const breakpoint = useBreakpoint();
  return (
    <Container>
      <h1>{breakpoint}</h1>
      <Row>{args.children}</Row>
    </Container>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: (
      <>
        <Column style={columnStyle} xs={12} sm={6} md={6} lg={2} xl={4}>
          Column A
        </Column>
        <Column style={columnStyle} xs={12} sm={6} md={2} lg={4} xl={2}>
          Column B
        </Column>
        <Column style={columnStyle} xs={12} sm={6} md={2} lg={4} xl={2}>
          Column C
        </Column>
        <Column style={columnStyle} xs={12} sm={6} md={2} lg={2} xl={4}>
          Column D
        </Column>
      </>
    ),
  },
});

export const DefaultSize = makeStory(Template, {
  args: {
    children: (
      <>
        <Column style={columnStyle} sizes={2}>
          Column A
        </Column>
        <Column style={columnStyle} sizes={4}>
          Column B
        </Column>
        <Column style={columnStyle} sizes={6}>
          Column C
        </Column>
      </>
    ),
  },
});

export const HideColumns = makeStory(Template, {
  args: {
    children: (
      <>
        <Column style={columnStyle} sizes={4} sm={0} md={0} xl={0}>
          Column A
        </Column>
        <Column style={columnStyle} sizes={4} xs={0} md={0}>
          Column B
        </Column>
        <Column style={columnStyle} sizes={4} xs={0} sm={0} lg={0}>
          Column C
        </Column>
      </>
    ),
  },
});

export const RenderFunction = makeStory(Template, {
  args: {
    children: breakpoint =>
      ['xs', 'sm', 'md', 'lg', 'xl'].map(size => {
        const style =
          size === breakpoint
            ? {
                color: 'white',
                background: 'cornflowerblue',
              }
            : {};
        return (
          <Column key={size} style={{ ...columnStyle, ...style }} sizes={2}>
            {size}
          </Column>
        );
      }),
  },
});

export const ColumnOrder = makeStory(Template, {
  args: {
    children: (
      <>
        <Column style={columnStyle} sizes={4} order={3}>
          Column A
        </Column>
        <Column style={columnStyle} sizes={4} order={2}>
          Column B
        </Column>
        <Column style={columnStyle} sizes={4} order={1}>
          Column C
        </Column>
      </>
    ),
  },
});

export const ObjectProps = makeStory(Template, {
  args: {
    children: (
      <>
        <Column style={columnStyle} sizes={{ xs: 12, sm: 10, md: 8, lg: 4, xl: 2 }}>
          Column A
        </Column>
        <Column style={columnStyle} sizes={{ xs: 12, sm: 2, md: 4, lg: 8, xl: 10 }}>
          Column B
        </Column>
      </>
    ),
  },
});
