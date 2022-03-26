import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/input/Button';

test('Button', async () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>ok</Button>);

  const button = getByText(/ok/i);

  fireEvent.click(button);

  expect(button.textContent).toEqual('ok');
  expect(handleClick).toHaveBeenCalledTimes(1);
});
