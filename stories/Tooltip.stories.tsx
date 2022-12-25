import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, PopupTrigger, Button, Text } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof PopupTrigger>;

const items = [
  { text: 'One', tooltip: 'Hello One!' },
  { text: 'Two', tooltip: 'Hello Two!' },
  { text: 'Three', tooltip: 'Hello Three!' },
];

const Template: ComponentStory<typeof Tooltip> = args => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PopupTrigger {...args} action="hover">
        <Button style={{ margin: 'auto' }}>
          <Text>Trigger Tooltip</Text>
        </Button>
        <Tooltip>Hello world!</Tooltip>
      </PopupTrigger>
    </div>
  );
};

const Template2: ComponentStory<typeof Tooltip> = args => {
  return (
    <div
      style={{
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {items.map(({ text, tooltip }) => {
        return (
          <PopupTrigger {...args} key={text} action="hover">
            <Button style={{ margin: 'auto' }}>
              <Text>{text}</Text>
            </Button>
            <Tooltip>{tooltip}</Tooltip>
          </PopupTrigger>
        );
      })}
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});

export const WithDelay = makeStory(Template, {
  args: {
    delay: 500,
  },
});

export const Multiple = makeStory(Template2, {
  args: {},
});
