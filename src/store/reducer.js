import { RECEIVE_PRODUCTS } from './ActionTypes'

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_PRODUCTS: return {
    ...state,
    products: action.products,
  }
  default: return state
  }
}
