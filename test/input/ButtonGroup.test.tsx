import { fireEvent, render } from '@testing-library/react';
import { ListItem } from 'types';
import ButtonGroup from './../../src/components/input/ButtonGroup';

const setup = (disabled?: string[]) => {
  const items: ListItem[] = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
    { value: 'three', label: 'Three' },
  ];

  if (disabled) {
    items.forEach(a => (a.disabled = disabled.some(b => a.value === b)));
  }

  const clickHistory = [];
  const handleClick = jest.fn(value => clickHistory.push(value));

  const { ...args } = render(<ButtonGroup items={items} onClick={handleClick} />);

  return { ...args, items, handleClick, clickHistory };
};

describe('ButtonGroup', () => {
  test('default', async () => {
    const { getByText, handleClick, clickHistory } = setup();

    fireEvent.click(getByText('One'));
    fireEvent.click(getByText('Two'));
    fireEvent.click(getByText('Three'));

    expect(handleClick).toHaveBeenCalledTimes(3);
    expect(clickHistory.length).toEqual(3);
    expect(clickHistory[0]).toEqual('one');
    expect(clickHistory[1]).toEqual('two');
    expect(clickHistory[2]).toEqual('three');
  });

  test('disabled', async () => {
    const { getByText, handleClick, clickHistory } = setup(['one', 'two']);

    fireEvent.click(getByText('One'));
    fireEvent.click(getByText('Two'));
    fireEvent.click(getByText('Three'));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(clickHistory.length).toEqual(1);
    expect(clickHistory[0]).toEqual('three');
  });
});
