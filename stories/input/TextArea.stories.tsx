import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Input/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Basic = makeStory(Template);

export const Disabled = makeStory(Template, {
  args: {
    disabled: true,
  },
});
