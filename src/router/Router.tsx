import { memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Regist } from '../pages/Regist';
import { userRoutes } from './UserRoutes';

export const Router = memo(() => {
  return (
    <Switch>
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
    </Switch>
  );
});
