import React from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from './repositories';
import { RepositorieVars, RepositoreGetResponse } from './repositories/types';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('react');
  const [pageLimit, setPageLimit] = React.useState(25);
  const { loading, error, data } = useQuery<RepositoreGetResponse, RepositorieVars>(GET_REPOSITORIES, {
    variables: { searchTerm: searchTerm, pageLimit: pageLimit }
  });

  console.log(data);

  return (
    <h1>Temp</h1>
  );
}

export default App;
