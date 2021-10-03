import { render, screen } from '@testing-library/react';
import Table from './index';

const defaultColumns = [
  {
    header: "Name",
    keyName: "name",
  },
  {
    header: "Start",
    keyName: "stargazerCount"
  },
  {
    header: "Forks",
    keyName: "forkCount"
  },
];

const defaultRows = [
  {
    name: "test 1",
    stargazerCount: 5,
    forkCount: 5,
  },
  {
    name: "test 2",
    stargazerCount: 5,
    forkCount: 5,
  },
  {
    name: "test 3",
    stargazerCount: 5,
    forkCount: 5,
  },
]

test('Table displays just the columns if no rows are passed', () => {
  render(<Table loading={false} columns={defaultColumns} rows={[]} tableName="test" />);
  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(1);
});

test('Table displays the correct number of columns', () => {
  render(<Table loading={false} columns={defaultColumns} rows={[]} tableName="test" />);
  const cols = screen.getAllByRole('columnheader');
  expect(cols).toHaveLength(3);
});

test('Table displays a loading message', () => {
  render(<Table loading={true} columns={defaultColumns} rows={[]} tableName="test" />);
  const loadingText = screen.getByText('Loading Data');
  expect(loadingText).toBeInTheDocument();
});

test('Table displays the correct number of rows', () => {
  render(<Table loading={false} columns={defaultColumns} rows={defaultRows} tableName="test" />);
  const rows = screen.getAllByRole('row');
  expect(rows).toHaveLength(defaultRows.length + 1);
});
