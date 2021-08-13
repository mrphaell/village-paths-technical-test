import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('features/Dashboard')),
    exact: true,
  },
  {
    path: 'users',
    component: lazy(() => import('features/Users')),
    exact: true,
  },
  {
    path: 'account',
    component: lazy(() => import('features/Account')),
    exact: true,
  },
];

export default routes;
