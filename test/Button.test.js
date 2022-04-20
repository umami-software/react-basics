import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/input/Button';

test('Button', async () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>OK</Button>);

  const button = getByText(/OK/i);

  fireEvent.click(button);

  expect(button.textContent).toEqual('OK');
  expect(handleClick).toHaveBeenCalledTimes(1);
});
