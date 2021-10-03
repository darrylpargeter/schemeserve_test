import React from 'react';
import { useQuery } from '@apollo/client';
import Box from '@mui/material/Box';
import Table from './table';

import { GET_REPOSITORIES, repositoriesColumns } from './repositories';
import { RepositorieVars, RepositoreGetResponse } from './repositories/types';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('react');
  const [pageLimit, setPageLimit] = React.useState(25);
  const { loading, error, data } = useQuery<RepositoreGetResponse, RepositorieVars>(GET_REPOSITORIES, {
    variables: { searchTerm: searchTerm, pageLimit: pageLimit }
  });

  console.log(data);

  return (
    <Box>
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
