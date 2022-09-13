import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordField } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Input/PasswordField',
  component: PasswordField,
  argTypes: {
    type: {
      control: false,
    },
  },
} as ComponentMeta<typeof PasswordField>;

const preventDefault = e => e.preventDefault();

const Template: ComponentStory<typeof PasswordField> = args => (
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
