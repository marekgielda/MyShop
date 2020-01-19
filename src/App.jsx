import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { getProducts } from './store/actions'
import { reducer } from './store/reducer'
import Home from './pages/Home/Home'

const middleware = [thunk]
const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

store.dispatch(getProducts())

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
