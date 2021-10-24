import { Home } from '../components/pages/user/Home';
import { History } from '../components/pages/user/History';
import { Setting } from '../components/pages/user/Setting';

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
