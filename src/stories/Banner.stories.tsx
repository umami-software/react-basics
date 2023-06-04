import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Banner, Flexbox } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/Banner',
  component: Banner,
} as Meta<typeof Banner>;

const Template: StoryFn<typeof Banner> = args => {
  return (
    <Flexbox direction="column" gap={20}>
      {args.children}
    </Flexbox>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: (
      <>
        <Banner>Default</Banner>
        <Banner variant="success">Success</Banner>
        <Banner variant="error">Error</Banner>
        <Banner variant="warning">Warning</Banner>
        <Banner outline={true}>Default outline</Banner>
        <Banner variant="success" outline={true}>
          Success outline
        </Banner>
        <Banner variant="error" outline={true}>
          Error outline
        </Banner>
        <Banner variant="warning" outline={true}>
          Warning outline
        </Banner>
      </>
    ),
  },
});
