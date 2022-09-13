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

export const Placeholder = makeStory(Template, {
  args: {
    placeholder: 'Enter text',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  },
});

export const Resizaable = makeStory(Template, {
  args: {
    placeholder: 'Resize me',
    resizeable: true,
  },
});
