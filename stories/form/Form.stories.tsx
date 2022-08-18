import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormInput, FormButtons, TextField, PasswordField, Button } from '../../src';
import { makeStory } from '../utils';

export default {
  title: 'Form/Form',
  component: Form,
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = args => {
  return <Form {...args} style={{ width: 300 }} />;
};

export const Basic = makeStory(Template, {
  args: {
    value: 'value',
    autoComplete: 'off',
    onSubmit: data => console.log({ data }),
    children: (
      <>
        <FormInput name="username" label="Username" rules={{ required: true }}>
          <TextField />
        </FormInput>
        <FormInput name="password" label="Password" rules={{ required: true }}>
          <PasswordField />
        </FormInput>
        <FormButtons>
          <Button type="submit" variant="primary">
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </FormButtons>
      </>
    ),
  },
});
