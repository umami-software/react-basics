import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TextArea } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/TextArea',
  component: TextArea,
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = args => {
  return (
    <div style={{ width: 300 }}>
      <TextArea {...args} />
    </div>
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

export const Resizaable = makeStory(Template, {
  args: {
    placeholder: 'Resize me',
    resizeable: true,
  },
});
