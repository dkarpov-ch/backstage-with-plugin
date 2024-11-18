import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const graphqlDocsPlugin = createPlugin({
  id: 'graphql-docs',
  routes: {
    root: rootRouteRef,
  },
});

export const GraphqlDocsPage = graphqlDocsPlugin.provide(
  createRoutableExtension({
    name: 'GraphqlDocsPage',
    component: () =>
      import('./components/GraphQLDocsPage').then(m => m.GraphQLDocsPage),
    mountPoint: rootRouteRef,
  }),
);
