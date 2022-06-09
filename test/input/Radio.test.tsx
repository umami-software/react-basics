import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import Radio from '../../src/components/input/Radio';

const setup = (initChecked?: boolean, disabled?: boolean) => {
  let checked = initChecked;
  const handleChange = jest.fn(value => (checked = value));

  const { ...args } = render(
    <Radio value="value" onChange={handleChange} checked={checked} disabled={disabled}>
      Radio
    </Radio>,
  );

  return { ...args, handleChange, checked };
};

describe('Radio', () => {
  test('default', async () => {
    const { container, getByText, handleChange } = setup();

    const input = container.querySelector('input');
    const label = getByText(/Radio/i);

    expect(input).toBeDefined();
    expect(label.textContent).toEqual('Radio');
    expect(input.checked).toEqual(false);

    fireEvent.click(input);

    expect(input?.checked).toEqual(true);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('disabled', async () => {
    const { container, getByText, getByTestId, handleChange } = setup(null, true);

    const radio = getByTestId('radio-container');
    const input = container.querySelector('input');
    const label = getByText(/Radio/i);

    expect(input).toBeDefined();
    expect(label.textContent).toEqual('Radio');
    expect(input.checked).toEqual(false);
    expect(radio.className).toContain('disabled');

    // using direct element.click() as jsdom will click through disabled elements.
    input.click();

    expect(input.checked).toEqual(false);
    expect(handleChange).toHaveBeenCalledTimes(0);
  });

  test('preselected', async () => {
    const { container, getByText, getByTestId } = setup(true);

    const radio = getByTestId('radio-container');
    const input = container.querySelector('input');
    const label = getByText(/Radio/i);

    expect(label.textContent).toEqual('Radio');
    expect(radio.className).toContain('checked');
    expect(input.checked).toEqual(true);
  });
});
