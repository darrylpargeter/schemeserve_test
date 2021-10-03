import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  },
  cache: new InMemoryCache(),
});

export default client;

