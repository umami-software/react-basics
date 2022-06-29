import { fireEvent, render } from '@testing-library/react';
import { ListItem } from 'types';
import Menu from './../../src/components/input/Menu';

const setup = (initValue?: string) => {
  const items: ListItem[] = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ];

  let value = initValue;
  const selectHistory = [];
  const onSelect = jest.fn(val => {
    selectHistory.push(val);
    value = val;
  });
  const { ...args } = render(<Menu items={items} value={value} onSelect={onSelect} />);

  return { ...args, onSelect, value, selectHistory };
};

describe('dropdown', () => {
  test('default', async () => {
    const { getByText, onSelect, selectHistory } = setup();

    fireEvent.click(getByText('One'));

    expect(getByText('One').className).toContain('selected');
    expect(onSelect).toBeCalledTimes(1);
    expect(selectHistory.length).toEqual(1);
    expect(selectHistory[0]).toEqual('one');
  });

  test('preselect', async () => {
    const { getByText, onSelect, selectHistory } = setup('two');

    expect(getByText('Two').className).toContain('selected');
    expect(onSelect).toBeCalledTimes(0);

    fireEvent.click(getByText('One'));

    expect(getByText('One').className).toContain('selected');
    expect(onSelect).toBeCalledTimes(1);
    expect(selectHistory.length).toEqual(1);
    expect(selectHistory[0]).toEqual('one');
  });
});
