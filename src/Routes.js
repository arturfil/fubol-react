import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Views Components
import Home from './components/views/home/Home';
import Signin from './components/views/signing/Signing'

const Routes = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;