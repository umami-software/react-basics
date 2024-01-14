import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextOverflow, Text } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Common/TextOverflow',
  component: TextOverflow,
} as Meta<typeof TextOverflow>;

const Template: StoryFn<typeof Text> = args => {
  return (
    <div style={{ width: 140 }}>
      <TextOverflow>
        <Text {...args} />
      </TextOverflow>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    value: 'value',
    children: 'This is long text that should be cut off.',
  },
});
