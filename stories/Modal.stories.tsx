import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, Button, ModalTrigger } from '../src';
import { makeStory } from './utils';
import useModal from 'hooks/useModal';

export default {
  title: 'Overlay/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
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

const Template2: ComponentStory<typeof ModalTrigger> = args => {
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

const Template3: ComponentStory<typeof ModalTrigger> = args => {
  const Content = () => {
    const { close } = useModal();
    return (
      <>
        <h1>Hello.</h1>
        <Button onClick={close}>Close</Button>
      </>
    );
  };

  return (
    <ModalTrigger {...args}>
      <Button>Show modal</Button>
      <Modal title="Title">
        <Content />
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

export const WithContext = makeStory(Template3, {
  args: {},
});
