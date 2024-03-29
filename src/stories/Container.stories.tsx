import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Column, Row, Container } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Layout/Container',
  component: Container,
} as Meta<typeof Container>;

const Template: StoryFn<typeof Container> = args => {
  return (
    <div style={{ height: '100%', background: '#eee' }}>
      <Container {...args}>
        <h1>Container</h1>
        <Row>
          <Column xs={12} sm={12}>
            Column A
          </Column>
          <Column xs={12} sm={12}>
            Column B
          </Column>
          <Column xs={12} sm={12}>
            Column C
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    style: { background: '#fff' },
  },
});
