import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Basic = makeStory(Template);

export const WithValue = makeStory(Template, {
  args: {
    defaultValue: 'Here is some text.',
  },
});

export const WithRows = makeStory(Template, {
  args: {
    rows: 8,
  },
});

export const Resize = makeStory(Template, {
  args: {
    resizeable: true,
  },
});
