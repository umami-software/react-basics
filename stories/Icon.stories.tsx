import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, IconSizes } from '../src';
import { makeStory } from './utils';
import Logo from './assets/logo.svg';

export default {
  title: 'Common/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Icon>;

const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

const Template: ComponentStory<typeof Icon> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    {sizes.map((size, i) => (
      <Fragment key={`${size}${i}`}>
        <label>{size}</label>
        <Icon {...args} size={size as IconSizes} />
      </Fragment>
    ))}
  </div>
);

export const Basic = makeStory(Template, {
  args: {
    children: <Logo />,
  },
  argTypes: {
    icon: { control: false },
    size: { control: false },
  },
});
