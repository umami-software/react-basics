import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Column, Container, useBreakpoint } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Layout/Columns',
  component: Column,
} as ComponentMeta<typeof Column>;

const containerStyle = {
  marginBottom: 20,
};

const columnStyle = {
  border: '1px solid lightgray',
  background: 'white',
  borderRadius: 10,
  padding: 20,
  textAlign: 'center' as const,
};

const Template: ComponentStory<typeof Column> = () => {
  const breakpoint = useBreakpoint();
  return (
    <div>
      <h1>{breakpoint}</h1>
      <Container style={containerStyle}>
        <Column style={columnStyle} xs={12} sm={6} md={3} lg={2}>
          Column A
        </Column>
        <Column style={columnStyle} xs={12} sm={6} md={3} lg={0}>
          Column B
        </Column>
        <Column style={columnStyle} xs={12} sm={6} md={3} lg={4}>
          Column C
        </Column>
        <Column style={columnStyle} xs={12} sm={6} md={3} lg={0}>
          Column D
        </Column>
      </Container>
      <Container style={containerStyle}>
        <Column style={columnStyle} xs={12} sm={4} md={3} lg={5}>
          Column A
        </Column>
        <Column style={columnStyle} xs={12} sm={4} md={6} lg={2}>
          Column B
        </Column>
        <Column style={columnStyle} xs={12} sm={4} md={3} lg={5}>
          Column C
        </Column>
      </Container>
    </div>
  );
};

export const Basic = makeStory(Template);
