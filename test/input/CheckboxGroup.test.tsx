import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import CheckboxGroup from './../../src/components/input/CheckboxGroup';
import { ListItem } from 'types';

const setup = (initValue: string[] = [], disabled?: string[]) => {
  const items: ListItem[] = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ];

  if (disabled) {
    items.forEach(a => (a.disabled = disabled.some(b => a.value === b)));
  }

  const value = [...initValue];
  const changeHistory = [];
  const onChange = jest.fn(val => {
    value.includes(val) ? value.splice(value.indexOf(val), 1) : value.push(val);
    changeHistory.push(val);
  });

  const { ...args } = render(<CheckboxGroup value={value} items={items} onChange={onChange} />);

  return { ...args, items, value, changeHistory, onChange };
};

describe('CheckboxGroup', () => {
  test('default', async () => {
    const { getByText, onChange, changeHistory } = setup();

    const inputs = screen.queryAllByTestId<HTMLInputElement>('checkbox-input');

    expect(getByText('One')).toBeInstanceOf(HTMLLabelElement);
    expect(getByText('Two')).toBeInstanceOf(HTMLLabelElement);
    expect(getByText('Three')).toBeInstanceOf(HTMLLabelElement);

    expect(inputs[0].checked).toEqual(false);
    expect(inputs[1].checked).toEqual(false);
    expect(inputs[2].checked).toEqual(false);

    fireEvent.click(inputs[0]);
    fireEvent.click(inputs[1]);
    fireEvent.click(inputs[2]);

    await waitFor(() => expect(screen.findAllByTestId('checkbox-icon')).toBeDefined());

    expect(inputs[0].checked).toEqual(true);
    expect(inputs[1].checked).toEqual(true);
    expect(inputs[2].checked).toEqual(true);
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(changeHistory.length).toEqual(3);
    expect(changeHistory[0]).toEqual('one');
    expect(changeHistory[1]).toEqual('two');
    expect(changeHistory[2]).toEqual('three');
  });

  test('preselect', async () => {
    const { onChange } = setup(['one', 'two']);

    const inputs = await screen.findAllByTestId<HTMLInputElement>('checkbox-input');

    expect(inputs[0].checked).toEqual(true);
    expect(inputs[1].checked).toEqual(true);
    expect(inputs[2].checked).toEqual(false);

    fireEvent.click(inputs[0]);
    fireEvent.click(inputs[1]);
    fireEvent.click(inputs[2]);

    expect(inputs[0].checked).toEqual(false);
    expect(inputs[1].checked).toEqual(false);
    expect(inputs[2].checked).toEqual(true);
    expect(onChange).toHaveBeenCalledTimes(3);
  });

  test('preselect', async () => {
    const { onChange, changeHistory } = setup([], ['one', 'two']);

    const inputs = await screen.findAllByTestId<HTMLInputElement>('checkbox-input');

    expect(inputs[0].checked).toEqual(false);
    expect(inputs[1].checked).toEqual(false);
    expect(inputs[2].checked).toEqual(false);

    // using direct element.click() as jsdom will click through disabled elements.
    inputs[0].click();
    inputs[1].click();
    inputs[2].click();

    expect(inputs[0].checked).toEqual(false);
    expect(inputs[1].checked).toEqual(false);
    expect(inputs[2].checked).toEqual(true);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(changeHistory.length).toEqual(1);
    expect(changeHistory[0]).toEqual('three');
  });
});
