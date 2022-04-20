import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../src/components/input/Checkbox';

test('Checkbox', async () => {
  const handleChange = jest.fn();
  const { getByText } = render(<Checkbox onChange={handleChange}>OK</Checkbox>);

  const button = getByText(/OK/i);

  fireEvent.click(button);

  expect(button.textContent).toEqual('OK');
  expect(handleChange).toHaveBeenCalledTimes(1);
});
