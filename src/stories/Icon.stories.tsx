import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Check from 'assets/check.svg';
import { Icon } from '../index';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => (
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

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    icon: <Check />,
  },
  parameters: {
    controls: { disable: true },
  },
});
