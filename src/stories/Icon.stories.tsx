import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Check from 'assets/check.svg';
import { Icon, IconSizes } from '../index';
import { CSSIcons } from '../constants';

export default {
  title: 'Icon',
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
    <label>xsmall</label>
    <Icon {...args} size="xsmall" />
    <label>small</label>
    <Icon {...args} size="small" />
    <label>medium</label>
    <Icon {...args} size="medium" />
    <label>large</label>
    <Icon {...args} size="large" />
    <label>xlarge</label>
    <Icon {...args} size="xlarge" />
  </div>
);

export const storySVG = Object.assign(Template.bind({}), {
  storyName: 'svg icon',
  args: {
    icon: <Check />,
  },
  parameters: {
    controls: { disable: true },
  },
});

export const storyCSS = Object.assign(Template.bind({}), {
  storyName: 'css icon',
  args: {
    icon: 'chevron-down',
  },
});

export const storyCSSIcons = Object.assign(Template2.bind({}), {
  storyName: 'all css icons',
  args: {
    icon: 'chevron-down',
  },
});
