import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import injectTapEventPlugin from 'react-tap-event-plugin'

import App from './components/App'
import Home from './components/Home'
import Parser from './components/Parser'
import Bar from './components/Bar'
import configureStore from './store/configureStore'

const store = configureStore()
const appHistory = useRouterHistory(createHashHistory)({queryKey: false})
const history = syncHistoryWithStore(appHistory, store)

injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="parser" component={Parser} />
                <Route path="bar" component={Bar} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

// For example, add <Route /> inside of root <Route /> to route component
// <Route path="component" component={Component} />
