import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import AverageCubicWeight from './components/AverageCubicWeight/AverageCubicWeight';

import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <AverageCubicWeight></AverageCubicWeight>
      </Provider>
    </Fragment>
  );
}

export default App;
