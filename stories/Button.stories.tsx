import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Icon } from '../src';
import { Check } from 'components/icons';
import { makeStory } from './utils';

export default {
  title: 'Input/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

const Template2: ComponentStory<typeof Button> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    <Button {...args} size="sm">
      Small
    </Button>
    <Button {...args} size="md">
      Medium
    </Button>
    <Button {...args} size="lg">
      Large
    </Button>
  </div>
);

export const Basic = makeStory(Template, {
  args: {
    children: 'Button',
  },
});

export const Primary = makeStory(Template, {
  args: {
    children: 'Button',
    variant: 'primary',
  },
});

export const Secondary = makeStory(Template, {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    children: 'Button',
    disabled: true,
  },
});

export const Quiet = makeStory(Template, {
  args: {
    children: 'Button',
    variant: 'quiet',
  },
});

export const WithIcon = makeStory(Template, {
  args: {
    children: (
      <>
        <Icon>
          <Check />
        </Icon>
        <div>Button</div>
      </>
    ),
  },
});

export const IconOnly = makeStory(Template, {
  args: {
    children: (
      <Icon>
        <Check />
      </Icon>
    ),
  },
});

export const AllSizes = makeStory(Template2);
