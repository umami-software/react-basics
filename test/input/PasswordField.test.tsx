import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import PasswordField from './../../src/components/input/PasswordField';

afterEach(cleanup);

const setup = (showPassword?: boolean) => {
  const { ...args } = render(<PasswordField showPassword={showPassword} />);

  return { ...args };
};

describe('PasswordField', () => {
  test('default', async () => {
    const { container } = setup();

    const input = container.querySelector('input');

    expect(input).toBeDefined();
    expect(input.type).toEqual('password');

    fireEvent.change(input, { target: { value: 'Hello' } });

    await waitFor(() => expect(input.value).toEqual('Hello'));
  });

  test('show password', async () => {
    const { container } = setup(true);

    const input = container.querySelector('input');

    expect(input).toBeDefined();
    expect(input.type).toEqual('text');

    fireEvent.change(input, { target: { value: 'Hello' } });

    await waitFor(() => expect(input.value).toEqual('Hello'));
  });
});
