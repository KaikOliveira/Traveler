import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { SignIn } from './signIn';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />

  </Switch>
);
