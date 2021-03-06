import React from 'react';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Table from './table';
import SearchBar from './searchBar';

import { GET_REPOSITORIES, repositoriesColumns } from './repositories';
import { RepositorieVars, RepositoreGetResponse } from './repositories/types';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
  }
}

function App() {
  const [searchTerm, setSearchTerm] = React.useState('react');
  const [pageLimit] = React.useState(25);
  const { loading, data } = useQuery<RepositoreGetResponse, RepositorieVars>(GET_REPOSITORIES, {
    variables: { searchTerm: searchTerm, pageLimit: pageLimit }
  });


  const handleChange = (value: string) => {
    setSearchTerm(value);
  }

  return (
    // @ts-ignore
    <Box sx={styles.root}>
      <SearchBar defaultValue={searchTerm} onChange={handleChange} placeHolder="Search Repos" />
      <Table 
        rows={data?.search?.nodes ?? []}
        columns={repositoriesColumns}
        loading={loading}
        tableName="repositories"
      />
    </Box>
  );
}

export default App;
