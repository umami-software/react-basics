import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal, Button } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Layout/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {show && <Modal {...args} />}
      <Button onClick={handleShow}>Show modal</Button>
    </>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: 'Modal',
  },
});
