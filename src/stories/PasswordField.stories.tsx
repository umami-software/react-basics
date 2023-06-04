import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { PasswordField } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Input/PasswordField',
  component: PasswordField,
  argTypes: {
    type: {
      control: false,
    },
  },
} as Meta<typeof PasswordField>;

const preventDefault = e => e.preventDefault();

const Template: StoryFn<typeof PasswordField> = args => (
  <form autoComplete="off" onSubmit={preventDefault}>
    <PasswordField {...args} style={{ width: 300 }} />
  </form>
);

export const Basic = makeStory(Template);

export const Disabled = makeStory(Template, {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
});
