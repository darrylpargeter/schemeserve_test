import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableRowProps, TableColumn } from './types';

interface CellProps {
  row: any;
  column: TableColumn;
}

const Cell = (props: CellProps) => {
  const display = props?.column?.component ? <props.column.component {...props.row} /> : props.row[props.column.keyName];
  return <TableCell>{display}</TableCell>;
}

const Row = (props: TableRowProps) => {
  return (
    <TableRow>
      {props.columns.map((col: TableColumn, idx: number) => (
        <Cell row={props.row} column={col} key={`cell-${idx}-${props.row.id}`} />
      ))}
    </TableRow>
  );
}

export default Row;
