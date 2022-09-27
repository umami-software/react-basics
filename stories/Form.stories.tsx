import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form, FormInput, FormButtons, TextField, PasswordField, Button } from '../src';
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
      <FormButtons>
        {({ reset }) => {
          const handleReset = () => reset();
          return (
            <>
              <Button type="submit" variant="primary">
                Submit
              </Button>
              <Button type="button" onClick={handleReset} variant="secondary">
                Reset
              </Button>
            </>
          );
        }}
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
