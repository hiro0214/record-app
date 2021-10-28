import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Regist } from '../pages/Regist';
import { UserDataProvider } from '../providers/UserDataProvider';
import { userRoutes } from './UserRoutes';

export const Router = memo(() => {
  return (
    <Switch>
      <UserDataProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/regist">
          <Regist />
        </Route>
        {userRoutes.map((route) => (
          <Route key={route.path} path={route.path} exact={route.exact}>
            {route.children}
          </Route>
        ))}
      </UserDataProvider>
    </Switch>
  );
});
