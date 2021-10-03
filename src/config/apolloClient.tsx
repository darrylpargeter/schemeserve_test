import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: "bearer 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"
  },
  cache: new InMemoryCache(),
});

export default client;

