import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Form,
  FormInput,
  FormButtons,
  TextField,
  PasswordField,
  Checkbox,
  SubmitButton,
  ResetButton,
} from '../src';
import { makeStory } from './utils';

export default {
  title: 'Form/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = args => {
  return (
    <Form {...args} style={{ width: 300 }}>
      <FormInput name="username" label="Username" rules={{ required: 'Required' }}>
        <TextField />
      </FormInput>
      <FormInput name="password" label="Password" rules={{ required: 'Required' }}>
        <PasswordField />
      </FormInput>
      <FormInput name="remember_me">
        <Checkbox>Remember me</Checkbox>
      </FormInput>
      <FormButtons>
        <SubmitButton variant="primary">Submit</SubmitButton>
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
