import { fireEvent, render, waitFor } from '@testing-library/react';
import Checkbox from '../../src/components/input/Checkbox';

describe('Checkbox', () => {
  test('default', async () => {
    const handleChange = jest.fn();

    const { container, getByText } = render(
      <Checkbox value="value" onChange={handleChange}>
        Checkbox
      </Checkbox>,
    );

    const input = container.querySelector('input');
    const label = getByText(/Checkbox/i);

    expect(input).toBeDefined();
    expect(label.textContent).toEqual('Checkbox');
    expect(input.checked).toEqual(false);

    fireEvent.click(input);

    expect(input?.checked).toEqual(true);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('disabled', async () => {
    const handleChange = jest.fn();

    const { container, getByText } = render(
      <Checkbox value="value" onChange={handleChange} disabled={true}>
        Checkbox
      </Checkbox>,
    );

    const input = container.querySelector('input');
    const label = getByText(/Checkbox/i);

    expect(input).toBeDefined();
    expect(label.textContent).toEqual('Checkbox');
    expect(input.checked).toEqual(false);
    expect(input.hasAttribute('disabled')).toEqual(true);

    // using direct element.click() as jsdom will click through disabled elements.
    input.click();

    expect(input.checked).toEqual(false);
    expect(handleChange).toHaveBeenCalledTimes(0);
  });

  test('preselected', async () => {
    let checked = true;
    const handleChange = jest.fn(value => (checked = value));

    const { container, getByText, getByTestId } = render(
      <Checkbox value="value" onChange={handleChange} checked={checked}>
        Checkbox
      </Checkbox>,
    );

    const input = container.querySelector('input');
    const label = getByText(/Checkbox/i);

    expect(input).toBeDefined();
    expect(label.textContent).toEqual('Checkbox');
    expect(checked).toEqual(true);

    fireEvent.click(input);

    await waitFor(() => expect(getByTestId('checkbox-icon')).toBeDefined());
    expect(checked).toEqual(false);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
