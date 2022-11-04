import React, { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, IconSizes, IconTypes } from '../src';
import { CSSIcons } from '../src/constants';
import { makeStory } from './utils';
import '../src/declarations';
import Logo from './logo.svg';

export default {
  title: 'Common/Icon',
  component: Icon,
  argTypes: {
    icon: {
      options: CSSIcons,
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

const Template2: ComponentStory<typeof Icon> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    {sizes.map((size, i) => (
      <Fragment key={`${size}${i}`}>
        <label>{size}</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {CSSIcons.map(icon => (
            <Icon
              key={`${size}${icon}`}
              {...args}
              icon={icon as IconTypes}
              size={size as IconSizes}
            />
          ))}
        </div>
      </Fragment>
    ))}
  </div>
);

export const CSS = makeStory(Template, {
  args: {
    icon: 'plus',
  },
  argTypes: {
    size: { control: false },
  },
});

export const SVG = makeStory(Template, {
  args: {
    children: <Logo />,
  },
  argTypes: {
    icon: { control: false },
    size: { control: false },
  },
});

export const CSSIconLibrary = makeStory(Template2, {
  argTypes: {
    icon: { control: false },
    size: { control: false },
  },
});
