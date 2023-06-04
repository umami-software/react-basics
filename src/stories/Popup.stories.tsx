import { StoryFn, Meta } from '@storybook/react';
import { Popup, PopupTrigger, Button, Text } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Popup',
  component: Popup,
} as Meta<typeof Popup>;

const Template: StoryFn<typeof Popup> = args => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PopupTrigger action="click">
        <Button>
          <Text>Trigger Popup</Text>
        </Button>
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
      </PopupTrigger>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});
