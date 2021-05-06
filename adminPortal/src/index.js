import React from "react";
import ReactDOM from "react-dom";
import MainApp from './main';
import registerServiceWorker from './serviceWorker';
// Add this import:
import {AppContainer} from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    
    <AppContainer>
      <Component/>
    </AppContainer>
    ,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render(MainApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./main', () => {
    render(MainApp);
  });
}
