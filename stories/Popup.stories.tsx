import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popup, PopupTrigger, Button, Text } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = args => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PopupTrigger {...args} action="click">
        <Button>
          <Text>Trigger Popup</Text>
        </Button>
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
      </PopupTrigger>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});
