import React, { useState } from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Modal, Button, ModalTrigger } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Modal',
  component: Modal,
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = args => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {show && (
        <Modal {...args}>
          <h1>Hello.</h1>
          <Button onClick={handleClose}>Close</Button>
        </Modal>
      )}
      <Button onClick={handleShow}>Show modal</Button>
    </>
  );
};

const Template2: StoryFn<typeof ModalTrigger> = args => {
  return (
    <ModalTrigger {...args}>
      <Button>Show modal</Button>
      <Modal title="Title">
        {close => {
          return (
            <>
              <h1>Hello.</h1>
              <Button onClick={close}>Close</Button>
            </>
          );
        }}
      </Modal>
    </ModalTrigger>
  );
};

export const Basic = makeStory(Template, {
  args: {
    title: 'Title',
  },
});

export const WithTrigger = makeStory(Template2, {
  args: {},
});
