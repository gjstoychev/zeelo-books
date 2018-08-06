import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, Switch } from 'react-router'

import configureStore from './store/configureStore'

import createBrowserHistory from './history'

import BookList from './containers/BookListContainer'
import BookDetails from './containers/BookDetailsContainer'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={createBrowserHistory}>
      <Switch>
        <Route exact path='/' component={BookList} />
        <Route path='/:id' component={BookDetails} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
