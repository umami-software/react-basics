import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Flexbox, SearchField, TextField } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/SearchField',
  component: SearchField,
} as Meta<typeof SearchField>;

const Template: StoryFn<typeof SearchField> = args => {
  const [value, setValue] = useState('');

  return (
    <Flexbox direction="column" gap={20} width={300}>
      <SearchField {...args} onChange={setValue as any} autoFocus />
      <TextField value={value} readOnly />
    </Flexbox>
  );
};

export const Basic = makeStory(Template);

export const WithDelay = makeStory(Template, {
  args: {
    delay: 1000,
  },
});
