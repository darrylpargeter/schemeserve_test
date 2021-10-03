import { IconCell } from '../table';
import { Repositorie } from './types';

const columns = [
  {
    header: 'Name',
    keyName: 'name',
    component: (row: Repositorie) => (<div><a href={row.url} rel="noreferrer noopener">{row.name}</a></div>),
  },
  {
    header: () => (<IconCell type="star" text="Stars" />),
    keyName: 'stargazerCount',
  },
  {
    header: () => (<IconCell type="fork" text="Forks" />),
    keyName: 'forkCount',
  }
];

export default columns;
