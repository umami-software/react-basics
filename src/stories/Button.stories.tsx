import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Button, Icon } from '../index';
import Icons from 'components/icons';
import { makeStory } from './utils';

export default {
  title: 'Input/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = args => <Button {...args} />;

const Template2: StoryFn<typeof Button> = args => (
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

export const Danger = makeStory(Template, {
  args: {
    children: 'Button',
    variant: 'danger',
  },
});

export const WithIcon = makeStory(Template, {
  args: {
    children: (
      <>
        <Icon>
          <Icons.Check />
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
        <Icons.Check />
      </Icon>
    ),
  },
});

export const AllSizes = makeStory(Template2);
