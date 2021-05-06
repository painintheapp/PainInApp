import React from 'react';
// import { ConnectedRouter } from 'connected-react-router'

import { Provider } from 'react-redux'
import { Route, Switch,BrowserRouter as Router, } from "react-router-dom";
import App from "./containers/App/index";
import store from './redux/store';
import "assets/vendor/style";
import "styles/index.less";
import "./assets/fonts/index.less"


const MainApp = () => 
  <Provider store={store}>
    <Router >
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </Provider>;

export default MainApp;