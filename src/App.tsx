import React from 'react';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Table from './table';
import SearchBar from './searchBar';

import { GET_REPOSITORIES, repositoriesColumns } from './repositories';
import { RepositorieVars, RepositoreGetResponse } from './repositories/types';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('react');
  const [pageLimit, setPageLimit] = React.useState(25);
  const { loading, error, data } = useQuery<RepositoreGetResponse, RepositorieVars>(GET_REPOSITORIES, {
    variables: { searchTerm: searchTerm, pageLimit: pageLimit }
  });


  const handleChange = (value: string) => {
    setSearchTerm(value);
  }

  return (
    <Box>
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
