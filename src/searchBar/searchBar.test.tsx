import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './index';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

test('SearchBar displays the correct default value', () => {
  const defaultValue = 'react';
  render(<SearchBar defaultValue={defaultValue} onChange={() => {}} placeHolder="test" />);
  const value = screen.getByDisplayValue(defaultValue);
  expect(value).toHaveValue(defaultValue);
});

test('SearchBar display value updates on changes events', () => {
  const defaultValue = 'react';
  const newValue = 'rust';
  render(<SearchBar defaultValue={defaultValue} onChange={() => {}} placeHolder="test" />);
  
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue(defaultValue);
  fireEvent.change(input, { target: { value: newValue } });
  expect(input).toHaveValue(newValue);
});

test('SearchBar to pass update value to onChange props', async () => {
  const onChange = jest.fn();
  const defaultValue = 'react';
  const newValue = 'rust';
  render(<SearchBar defaultValue={defaultValue} onChange={onChange} placeHolder="test" />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: newValue } });
  await waitFor(() => {
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(newValue);
  });
});
