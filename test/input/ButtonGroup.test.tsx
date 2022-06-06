import { render, fireEvent } from '@testing-library/react';
import { setgroups } from 'process';
import ButtonGroup from './../../src/components/input/ButtonGroup';

function setup() {
  const handleClick = jest.fn();
  const { getByText } = render(<ButtonGroup onClick={handleClick}>OK</Button>);
}

describe('ButtonGroup', () => {
  test('default', async () => {});
});
