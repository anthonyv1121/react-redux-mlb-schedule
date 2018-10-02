import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/ui.css';

import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducers';
import { getGames } from './redux/actions';
import { routes } from './routes';

// const store = createStore( reducer, compose(applyMiddleware(thunk)) )

const storeFactory = (initialState={}) => {
    return applyMiddleware(thunk)(createStore)(reducer,initialState)
}

const store = storeFactory({})
window.store = store;
window.React = React;
store.dispatch(getGames())

render(
    <Provider store={store}>
       {routes}
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
