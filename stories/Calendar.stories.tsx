import React, { useState, Key } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { enUS, fr, de, zhCN, ja } from 'date-fns/locale';
import { Calendar, TextField, ButtonGroup, Button } from '../src';
import { makeStory } from './utils';

export default {
  title: 'Input/Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>;

const locales = [enUS, fr, de, zhCN, ja];

const Template: ComponentStory<typeof Calendar> = args => {
  const [date, setDate] = useState<Date>();

  return (
    <div style={{ width: 500 }}>
      <TextField readOnly={true} value={date?.toString()} />
      <Calendar {...args} date={date} onChange={setDate} />
    </div>
  );
};

const Template2: ComponentStory<typeof Calendar> = args => {
  const [date, setDate] = useState<Date>();
  const [key, setKey] = useState<Key>(0);

  return (
    <div style={{ width: 500 }}>
      <ButtonGroup onSelect={setKey} selectedKey={key}>
        <Button key={0}>en-US</Button>
        <Button key={1}>fr-FR</Button>
        <Button key={2}>de-DE</Button>
        <Button key={3}>zh-CN</Button>
        <Button key={4}>ja-JP</Button>
      </ButtonGroup>
      <Calendar {...args} locale={locales[key]} date={date} onChange={setDate} />
    </div>
  );
};

export const Basic = makeStory(Template, {
  args: {
    showValue: true,
  },
});

export const Locales = makeStory(Template2, {
  args: {},
});
