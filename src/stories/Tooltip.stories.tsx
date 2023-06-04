import { StoryFn, Meta } from '@storybook/react';
import { Tooltip, Button, Text } from '../index';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
} as Meta<typeof Tooltip>;

const items = [
  { text: 'One', tooltip: 'Hello One!' },
  { text: 'Two', tooltip: 'Hello Two!' },
  { text: 'Three', tooltip: 'Hello Three!' },
];

const Template: StoryFn<typeof Tooltip> = args => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Tooltip {...args} label="Hello!">
        <Button style={{ margin: 'auto' }}>
          <Text>Trigger Tooltip</Text>
        </Button>
      </Tooltip>
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
          <Tooltip {...args} key={text} label={tooltip} action="hover">
            <Button style={{ margin: 'auto' }}>
              <Text>{text}</Text>
            </Button>
          </Tooltip>
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
