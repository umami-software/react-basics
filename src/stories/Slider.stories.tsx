import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Slider, TextField } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/Slider',
  component: Slider,
} as Meta<typeof Slider>;

const Template: StoryFn<typeof Slider> = args => {
  const [value, setValue] = useState(args.value ?? 0);

  return (
    <div style={{ display: 'flex', gap: 20 }}>
      <Slider {...args} onChange={setValue} />
      <div style={{ width: 70 }}>
        <TextField value={`${value}`} readOnly={true} />
      </div>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});

export const Buffered = makeStory(Template, {
  args: {
    buffered: true,
  },
});

export const Disabled = makeStory(Template, {
  args: {
    disabled: true,
    value: 50,
  },
});

export const LeftFill = makeStory(Template, {
  args: {
    value: 50,
    fill: 'left',
  },
});

export const RightFill = makeStory(Template, {
  args: {
    value: 50,
    fill: 'right',
  },
});
