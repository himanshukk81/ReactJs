import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './reducers';
import App from './components/App';

import Confirmation from './components/Confirmation';

import OfficeDetail from './components/OfficeDetail';

import PersonalInfo from './components/PersonalInfo';

import SuccessPage from './components/SuccessPage';


import rootSaga from './sagas';

import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';

const history = createHistory();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)),
);

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/personal" component={PersonalInfo} />
        <Route exact path="/officedetail" component={OfficeDetail} />
        <Route exact path="/confirmation" component={Confirmation} />
        <Route exact path="/success" component={SuccessPage} />
        
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

