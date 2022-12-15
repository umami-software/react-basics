import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, Button } from '../src';
import { makeStory } from './utils';

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
      {show && <Modal {...args} onClose={handleClose} />}
      <Button onClick={handleShow}>Show modal</Button>
    </>
  );
};

export const Basic = makeStory(Template, {
  args: {
    title: 'Title',
    children: close => (
      <>
        <p>Content</p>
        <Button onClick={close}>Close</Button>
      </>
    ),
  },
});
