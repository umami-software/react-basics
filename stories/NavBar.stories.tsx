import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NavBar, Item, Icon, Text, Container } from '../src';
import { makeStory } from './utils';
import Logo from './assets/logo.svg';
import Home from './assets/home.svg';
import Dashboard from './assets/dashboard.svg';
import User from './assets/user.svg';
import Gear from './assets/gear.svg';

const items = [
  { key: 'home', label: 'Home', icon: <Home /> },
  { key: 'dashboard', label: 'Dashboard', icon: <Dashboard /> },
  { key: 'profile', label: 'Profile', icon: <User /> },
  { key: 'settings', label: 'Settings', icon: <Gear />, disabled: false },
];

const render = data =>
  data.map(({ key, label, icon, disabled }) => (
    <Item key={key} disabled={disabled}>
      <Icon>{icon}</Icon>
      <Text>{label}</Text>
    </Item>
  ));

export default {
  title: 'Navigation/NavBar',
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = args => {
  const [selected, setSelected] = useState(args.selectedKey);

  return (
    <Container fluid={true} style={{ backgroundColor: '#eee' }}>
      <NavBar {...args} selectedKey={selected} onSelect={setSelected} style={{ width: 200 }} />
    </Container>
  );
};

export const Basic = makeStory(Template, {
  args: {
    children: render(items),
  },
});

export const Preselected = makeStory(Template, {
  args: {
    children: render(items),
    selectedKey: 'profile',
  },
});

export const Disabled = makeStory(Template, {
  args: {
    children: render(
      items.concat({ key: 'disabled', label: 'Disabled', icon: <Logo />, disabled: true }),
    ),
  },
});
