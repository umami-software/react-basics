import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Grid } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Layout/Grid',
  component: Grid,
} as Meta<typeof Grid>;

const Template: StoryFn<typeof Grid> = args => {
  return <Grid {...args} />;
};

export const Basic = makeStory(Template, {
  args: {
    areas: ['header  header', 'sidebar content', 'footer  footer'],
    columns: ['1fr', '3fr'],
    rows: ['50px', '200px', '50px'],
    children: (
      <>
        <div style={{ padding: 20, gridArea: 'header', background: 'honeydew' }}>Header</div>
        <div style={{ padding: 20, gridArea: 'sidebar', background: 'azure' }}>Sidebar</div>
        <div style={{ padding: 20, gridArea: 'content', background: 'ivory' }}>Content</div>
        <div style={{ padding: 20, gridArea: 'footer', background: 'aliceblue' }}>Footer</div>
      </>
    ),
  },
});
