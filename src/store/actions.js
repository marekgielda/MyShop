import productsApi from './productsApi'
import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEARCH_BY_PHRASE,
  SORT_PRODUCTS,
} from './ActionTypes'

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
})

export const getProducts = () => (dispatch) => {
  productsApi.getProducts((products) => {
    dispatch(receiveProducts(products))
  })
}

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
})

export const removeFromCart = (productCartId) => ({
  type: REMOVE_FROM_CART,
  productCartId,
})

export const searchPhrase = (phrase) => ({
  type: SEARCH_BY_PHRASE,
  phrase,
})

export const sort = (sortingType, sortingDirection) => ({
  type: SORT_PRODUCTS,
  sortingType,
  sortingDirection,
})
