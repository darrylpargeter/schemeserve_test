import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { TableColumn } from './types';

interface TableColumnProps {
  columns: TableColumn[];
}

const TableCol = (props: TableColumn) => {
  const title = typeof props.header === 'string' ? props.header : <props.header />;
  return <TableCell align={props.align}>{title}</TableCell>
}

const TableColumnComp = (props: TableColumnProps) => {
  return (
    <TableRow>
      {props.columns.map((col: TableColumn) => <TableCol {...col} key={`column-${col.keyName}`} />)}
    </TableRow>
  );
}

export default TableColumnComp;
