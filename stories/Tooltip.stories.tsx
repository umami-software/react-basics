import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tooltip, TooltipTrigger, Button, Text } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Overlay/Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof TooltipTrigger>;

const Template: ComponentStory<typeof Tooltip> = args => {
  return (
    <div style={{ height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TooltipTrigger {...args} content={'Hello world!'}>
        <Button style={{ margin: 'auto' }}>
          <Text>Trigger Tooltip</Text>
        </Button>
      </TooltipTrigger>
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {},
});
