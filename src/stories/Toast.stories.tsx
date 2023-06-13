import { StoryFn, Meta } from '@storybook/react';
import { Toast, Button, useToasts, ReactBasicsProvider } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Status/Toast',
  component: Toast,
  decorators: [
    Story => (
      <ReactBasicsProvider>
        <Story />
      </ReactBasicsProvider>
    ),
  ],
} as Meta<typeof Toast>;

const Template: StoryFn<typeof Toast> = args => {
  const { showToast } = useToasts();

  const handleClick = () => showToast({ ...args });

  return (
    <>
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
