import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { getProducts } from '@store/actions'
import { reducer } from '@store/reducer'
import Home from './pages/Home/Home'

const middleware = [thunk]
const store = createStore(
  reducer,
  applyMiddleware(...middleware),
)

store.dispatch(getProducts())

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
)

export default App
