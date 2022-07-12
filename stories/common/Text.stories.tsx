import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Common/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => {
  return <Text {...args} />;
};

export const Basic = makeStory(Template, {
  args: {
    value: 'value',
    children: 'Text',
  },
});
