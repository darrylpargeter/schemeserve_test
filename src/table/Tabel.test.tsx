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
