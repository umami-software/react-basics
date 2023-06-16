import { StoryFn, Meta } from '@storybook/react';
import { Tooltip, TooltipPopup, Button, Text } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Tooltip',
  component: TooltipPopup,
} as Meta<typeof TooltipPopup>;

const items = [
  { text: 'One', tooltip: 'Hello One!' },
  { text: 'Two', tooltip: 'Hello Two!' },
  { text: 'Three', tooltip: 'Hello Three!' },
];

const Template: StoryFn<typeof Tooltip> = args => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TooltipPopup {...args} label="Hello!">
        <Button style={{ margin: 'auto' }}>
          <Text>Trigger Tooltip</Text>
        </Button>
      </TooltipPopup>
    </div>
  );
};

const Template2: StoryFn<typeof Tooltip> = args => {
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
          <TooltipPopup {...args} key={text} label={tooltip} action="hover">
            <Button style={{ margin: 'auto' }}>
              <Text>{text}</Text>
            </Button>
          </TooltipPopup>
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
