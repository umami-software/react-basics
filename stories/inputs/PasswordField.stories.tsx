import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PasswordField } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/PasswordField',
  component: PasswordField,
  argTypes: {
    type: {
      control: false,
    },
  },
} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = args => (
  <form autoComplete="off" onSubmit={e => e.preventDefault()}>
    <PasswordField {...args} />
  </form>
);

export const Basic = makeStory(Template);
