import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Flexbox } from '../index';
import { makeStory, map } from './utils';

export default {
  title: 'Layout/Flexbox',
  component: Flexbox,
} as Meta<typeof Flexbox>;

const Template: StoryFn<typeof Flexbox> = args => {
  return (
    <Flexbox {...args}>
      {map(5, (n, i) => {
        return (
          <div key={i} style={{ padding: 20, border: '1px solid gray' }}>
            {`Box ${i + 1}`}
          </div>
        );
      })}
    </Flexbox>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});

export const Column = makeStory(Template, {
  args: {
    direction: 'column',
  },
});
