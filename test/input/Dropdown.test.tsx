import { render, fireEvent, waitFor, screen, within } from '@testing-library/react';
import Dropdown from './../../src/components/input/Dropdown';
import { ListItem } from 'types';

const setup = (initValue?: string) => {
  const items: ListItem[] = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ];

  let value = initValue;
  const changeHistory = [];
  const onChange = jest.fn(val => {
    changeHistory.push(val);
    value = val;
  });
  const { ...args } = render(<Dropdown items={items} value={value} onChange={onChange} />);

  return { ...args, onChange, value, changeHistory };
};

describe('dropdown', () => {
  test('default', async () => {
    const { getByTestId, getByText, onChange, changeHistory } = setup();

    fireEvent.click(getByTestId('dropdown-container'));
    await waitFor(() => getByText('One'));
    fireEvent.click(getByText('One'));

    expect(changeHistory[0]).toEqual('one');
    expect(onChange).toBeCalledTimes(1);
  });

  test('preselect', async () => {
    const { getByTestId, getByText, onChange, changeHistory } = setup('two');

    await waitFor(() => getByTestId('dropdown-selected').children);

    const { getByText: getByTextWithin } = within(screen.getByTestId('dropdown-selected'));
    expect(getByTextWithin('Two')).toBeDefined();

    fireEvent.click(getByTestId('dropdown-container'));
    await waitFor(() => getByText('One'));
    fireEvent.click(getByText('One'));

    expect(changeHistory[0]).toEqual('one');
    expect(onChange).toBeCalledTimes(1);
  });
});
