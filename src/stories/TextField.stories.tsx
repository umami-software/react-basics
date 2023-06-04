import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextField } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/TextField',
  component: TextField,
} as Meta<typeof TextField>;

const Template: StoryFn<typeof TextField> = args => {
  const [text, setText] = useState('');

  return (
    <TextField
      {...args}
      value={text}
      onChange={e => setText(e.target.value)}
      style={{ width: 300 }}
    />
  );
};

export const Basic = makeStory(Template);

export const Placeholder = makeStory(Template, {
  args: {
    placeholder: 'Enter text',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
});

export const CopyButton = makeStory(Template, {
  args: {
    value: 'Copy me',
    allowCopy: true,
  },
});
