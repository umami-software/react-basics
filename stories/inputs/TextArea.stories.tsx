import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Inputs/TextArea',
  component: TextArea,
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = args => <TextArea {...args} />;

export const Basic = makeStory(Template, {
  args: {
    label: 'Text area',
  },
});

export const WithValue = makeStory(Template, {
  args: {
    label: 'Text area',
    defaultValue: 'Here is some text.',
  },
});

export const WithRows = makeStory(Template, {
  args: {
    label: 'Text area',
    rows: 8,
  },
});

export const Resize = makeStory(Template, {
  args: {
    label: 'Text area',
    resizeable: true,
  },
});
