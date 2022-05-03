import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, Icon } from '../../src';

export default {
  title: 'Inputs/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const storyDefault = Object.assign(Template.bind({}), {
  storyName: 'default',
  args: {
    children: 'Button',
  },
});

export const storyPrimary = Object.assign(Template.bind({}), {
  storyName: 'primary',
  args: {
    children: 'Button',
    variant: 'primary',
  },
});

export const storySecondary = Object.assign(Template.bind({}), {
  storyName: 'secondary',
  args: {
    children: 'Button',
    variant: 'secondary',
  },
});

export const storyDisabled = Object.assign(Template.bind({}), {
  storyName: 'disabled',
  args: {
    children: 'Button',
    disabled: true,
  },
});

export const storyQuiet = Object.assign(Template.bind({}), {
  storyName: 'quiet',
  args: {
    children: 'Button',
    variant: 'quiet',
  },
});

export const storyWithIcon = Object.assign(Template.bind({}), {
  storyName: 'with icon',
  args: {
    children: (
      <>
        <Icon icon="checkmark" />
        <div>Button</div>
      </>
    ),
  },
});

export const storyIconOnly = Object.assign(Template.bind({}), {
  storyName: 'icon only',
  args: {
    children: <Icon icon="checkmark" />,
  },
});

const SizesComponent: ComponentStory<typeof Button> = args => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 20 }}>
    <Button {...args} size="small">
      Small
    </Button>
    <Button {...args} size="medium">
      Medium
    </Button>
    <Button {...args} size="large">
      Large
    </Button>
  </div>
);

export const storySizes = Object.assign(SizesComponent.bind({}), {
  storyName: 'sizes',
  args: {},
});
