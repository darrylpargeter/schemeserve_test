export interface TableColumn {
  align?: "left" | "center" | "right" | "justify" | "inherit" | undefined;
  header: string | ReactElement;
  keyName: string;
  component?: (row: any) => ReactElement;
}

export interface TableRowProps {
  row: any;
  columns: TableColumn[];
}

export interface TableProps {
  columns: TableColumnProps[];
  rows: any[];
  loading?: boolean;
  tableName: string;
}
