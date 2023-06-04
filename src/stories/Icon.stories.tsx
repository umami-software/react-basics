import React, { createElement, Fragment } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Icon, IconSizes, Icons } from '../index';
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
} as Meta<typeof Icon>;

const sizes = ['xl', 'lg', 'md', 'sm', 'xs'];

const Template: StoryFn<typeof Icon> = args => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
      {sizes.map((size, i) => (
        <Fragment key={`${size}${i}`}>
          <label>{size}</label>
          <Icon {...args} size={size as IconSizes} />
        </Fragment>
      ))}
    </div>
  );
};

const Template2: StoryFn<typeof Icon> = args => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
      {Object.values(Icons).map((icon, index) => {
        return (
          <Fragment key={index}>
            <h3>{icon.name.replace('Svg', '')}</h3>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 20,
                paddingBottom: 20,
                borderBottom: '1px solid #ccc',
              }}
            >
              {sizes.map((size, i) => {
                return (
                  <Fragment key={`${icon}${size}${i}`}>
                    <Icon {...args} size={size as IconSizes}>
                      {createElement(icon)}
                    </Icon>
                  </Fragment>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: <Logo />,
  },
  argTypes: {
    icon: { control: false },
    size: { control: false },
  },
});

export const Library = makeStory(Template2, {
  args: {},
  argTypes: {
    icon: { control: false },
    size: { control: false },
  },
});
