import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popup, Button, Text } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(state => !state);

  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={handleShow} style={{ margin: 'auto' }}>
        <Text>Trigger Popup</Text>
        {show && (
          <Popup {...args}>
            <Text
              size="lg"
              style={{
                display: 'block',
                width: 200,
                fontWeight: 'bold',
                padding: 20,
                background: 'cornsilk',
              }}
            >
              Hello.
            </Text>
          </Popup>
        )}
      </Button>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});
