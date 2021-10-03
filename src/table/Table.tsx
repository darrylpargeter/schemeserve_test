import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';

import { TableColumn, Loader } from './index';
import { TableProps } from './types';

const TableComp = (props: TableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label={props.tableName}>
        <TableHead>
          <TableColumn columns={props.columns} />
        </TableHead>

        <TableBody>
          {props.loading ? (
            <Loader />
          ) : (
            null
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComp;
