import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast, Button } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Status/Toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {show && <Toast {...args} onClose={handleClose} />}
      <Button onClick={handleClick}>Show toast</Button>
    </>
  );
};

export const Basic = makeStory(Template, {
  args: {
    message: 'Hello! I am toast!',
  },
});

export const Success = makeStory(Template, {
  args: {
    message: 'Success! You did it!',
    variant: 'success',
  },
});

export const Error = makeStory(Template, {
  args: {
    message: 'Error! Something went wrong.',
    variant: 'error',
  },
});

export const NoTimeout = makeStory(Template, {
  args: {
    message: 'You must close this message yourself.',
    timeout: 0,
  },
});

export const PositionBottom = makeStory(Template, {
  args: {
    message: 'This appears at the bottom.',
    timeout: 0,
    position: 'bottom',
  },
});
