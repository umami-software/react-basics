import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Form,
  FormInput,
  FormButtons,
  TextField,
  PasswordField,
  Checkbox,
  Button,
  ResetButton,
} from '../src';
import { makeStory } from './utils';
import FormRow from 'components/form/FormRow';
import Dropdown from 'components/input/Dropdown';
import Item from 'components/common/Item';

export default {
  title: 'Form/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = args => {
  return (
    <Form {...args} style={{ width: 300 }}>
      <FormRow label="Username">
        <FormInput name="username" rules={{ required: 'Required' }}>
          <TextField />
        </FormInput>
      </FormRow>
      <FormRow label="Password">
        <FormInput name="password" rules={{ required: 'Required' }}>
          <PasswordField />
        </FormInput>
      </FormRow>
      <FormRow>
        <FormInput name="remember_me">
          <Checkbox>Remember me</Checkbox>
        </FormInput>
      </FormRow>
      <FormButtons>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <ResetButton variant="secondary">Reset</ResetButton>
      </FormButtons>
    </Form>
  );
};

const Template2: ComponentStory<typeof Form> = args => {
  const items = [
    { name: 'one', label: 'One' },
    { name: 'two', label: 'Two' },
    { name: 'three', label: 'Three' },
  ];
  const renderValue = v => items.find(e => e.name === v)?.label;

  return (
    <Form {...args} style={{ width: 300 }}>
      <FormRow label="Select">
        <FormInput name="selected" rules={{ required: 'Required' }}>
          <Dropdown items={items} renderValue={renderValue}>
            {({ name, label }) => {
              return <Item key={name}>{label}</Item>;
            }}
          </Dropdown>
        </FormInput>
      </FormRow>
      <FormButtons>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <ResetButton variant="secondary">Reset</ResetButton>
      </FormButtons>
    </Form>
  );
};

export const Basic = makeStory(Template, {
  args: {
    value: 'value',
    autoComplete: 'off',
    onSubmit: data => console.log({ data }), // tslint:disable-line:no-console
  },
});

export const Error = makeStory(Template, {
  args: {
    value: 'value',
    autoComplete: 'off',
    error: 'Something went wrong.',
    onSubmit: data => console.log({ data }), // tslint:disable-line:no-console
  },
});

export const Select = makeStory(Template2);
