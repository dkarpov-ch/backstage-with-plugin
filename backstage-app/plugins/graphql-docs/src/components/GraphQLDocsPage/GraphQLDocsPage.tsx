import React from 'react';
import { ApolloSandbox } from '@apollo/sandbox/react';

export const GraphQLDocsPage = () => {
  return (
    <div style={{ maxWidth: '100%', height: '100vh', overflow: 'hidden' }}>
      <ApolloSandbox
        initialEndpoint="http://localhost:4000/graphql" // Ensure this matches your Apollo Server endpoint
      />
    </div>
  );
};
