import { Home } from '../pages/user/Home';
import { History } from '../pages/user/History';
import { Setting } from '../pages/user/Setting';

export const userRoutes = [
  {
    path: '/user/:id',
    exact: true,
    children: <Home />,
  },
  {
    path: '/user/:id/history',
    exact: false,
    children: <History />,
  },
  {
    path: '/user/:id/setting',
    exact: false,
    children: <Setting />,
  },
];
