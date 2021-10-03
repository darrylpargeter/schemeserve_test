import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import { TableColumn, Loader, TableRow } from './index';
import { TableProps, TableRowProps } from './types';

const styles = {
  root: {
    overflow: 'auto',
  }
}

const TableComp = (props: TableProps) => {

  const renderRows = React.useCallback(() => {
    return props.rows.map((row: TableRowProps, idx: number) => (
      <TableRow row={row} columns={props.columns} key={`row-${idx}`} />
    ))
  }, [props.rows, props.columns]);

  return (
    <TableContainer sx={styles.root} component={Paper}>
      <Table aria-label={props.tableName} stickyHeader>
        <TableHead>
          <TableColumn columns={props.columns} />
        </TableHead>

        <TableBody>
          {props.loading ? (
            <Loader />
          ) : (
            renderRows()
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComp;
