import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Icon, IconSizes, IconTypes } from '../../src';
import { CSSIcons } from '../../src/constants';
import { makeStory } from '../utils';
import Logo from '../logo.svg';

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

const Template: ComponentStory<typeof Icon> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(n => (
      <>
        <label>{n}</label>
        <Icon {...args} size={n as IconSizes} />
      </>
    ))}
  </div>
);

const Template2: ComponentStory<typeof Icon> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    {['xsmall', 'small', 'medium', 'large', 'xlarge'].map(n => (
      <>
        <label>{n}</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {CSSIcons.map(icon => (
            <Icon key={n} {...args} icon={icon as IconTypes} size={n as IconSizes} />
          ))}
        </div>
      </>
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
    icon: <Logo />,
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
