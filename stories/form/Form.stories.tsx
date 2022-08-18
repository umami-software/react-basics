import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Form,
  FormInput,
  FormButtons,
  FormMembers,
  TextField,
  PasswordField,
  Button,
} from '../../src';
import { makeStory } from '../utils';
import { useRef } from 'react';

export default {
  title: 'Form/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = args => {
  const ref = useRef<FormMembers>();

  const handleReset = () => ref?.current?.reset();

  return (
    <Form ref={ref} {...args} style={{ width: 300 }}>
      <FormInput name="username" label="Username" rules={{ required: 'Required' }}>
        <TextField />
      </FormInput>
      <FormInput name="password" label="Password" rules={{ required: 'Required' }}>
        <PasswordField />
      </FormInput>
      <FormButtons>
        <Button type="submit" variant="primary">
          Submit
        </Button>
        <Button type="button" onClick={handleReset} variant="secondary">
          Reset
        </Button>
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
