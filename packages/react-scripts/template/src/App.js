import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

// Stores
import {
  HomeStore
} from './stores/stores';

// Pages
import {
  HomePage
} from './pages/pages';

require('./App.css');

const stores = {
  homeStore: HomeStore
};

export default class App extends React.Component {
  render () {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Switch>
            <Route exact={ true } path="/" component={ HomePage } />

            {/* WebApp */}

            {/* PAGE NOT FOUND */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}


