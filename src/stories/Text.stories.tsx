import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Text } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Common/Text',
  component: Text,
} as Meta<typeof Text>;

const sizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];

const Template: StoryFn<typeof Text> = args => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {sizes.map(size => {
        return (
          <div key={size}>
            <h3>{size}</h3>
            <Text size={size as any} {...args} />
          </div>
        );
      })}
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: 'Text',
  },
});
