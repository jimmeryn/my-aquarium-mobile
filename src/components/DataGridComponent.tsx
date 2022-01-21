import * as React from 'react';
import DataGrid from 'react-data-grid';

type Props = {
  rows: any[];
  columns: any[];
};

export const DataGridComponent = ({ rows, columns }: Props) => {
  return <DataGrid columns={columns} rows={rows} style={{ height: '100%' }} />;
};
