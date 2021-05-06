import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import React  from 'react';

import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/redux/reducers';
import Router from './Router';

const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
