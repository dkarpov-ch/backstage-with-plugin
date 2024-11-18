import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { graphqlDocsPlugin, GraphqlDocsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(graphqlDocsPlugin)
  .addPage({
    element: <GraphqlDocsPage />,
    title: 'Root Page',
    path: '/graphql-docs',
  })
  .render();
