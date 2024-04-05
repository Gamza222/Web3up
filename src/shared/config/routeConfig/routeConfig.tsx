import { MainPageAsync } from 'pages/MainPage';
import React from 'react';

import { type RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  // NOT_FOUND = 'not-found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  // [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath['not-found'],
  //   element: <NotFoundPageAsync />,
  // },
};
