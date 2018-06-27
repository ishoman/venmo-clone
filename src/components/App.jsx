import Error404 from './Error404';
import Welcome from './Welcome';
import Nav from './Nav';
import React from 'react';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <style global jsx> {`
        html {
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
      `}
      </style>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Welcome}/>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
