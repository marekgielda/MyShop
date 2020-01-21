import { sortBy } from 'underscore'
import Cookies from 'js-cookie'

import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SEARCH_BY_PHRASE,
  SORT_PRODUCTS,
} from './ActionTypes'

const uuidv1 = require('uuid/v1')

const getInitState = () => {
  const itemsFromCookies = Cookies.get('cartItems')
  const items = itemsFromCookies ? JSON.parse(itemsFromCookies) : []
  return { cartItems: items }
}

export const reducer = (state = getInitState(), action) => {
  switch (action.type) {
  case RECEIVE_PRODUCTS: return {
    ...state,
    products: action.products,
    productsFiltered: action.products,
  }
  case ADD_TO_CART: {
    const newItems = [
      ...state.cartItems,
      {
        id: action.item.id,
        photo: action.item.photo,
        name: action.item.name,
        price: action.item.price,
        description: action.item.description,
        in_stock: action.item.in_stock,
        productCartId: uuidv1(),
      },
    ]
    Cookies.set('cartItems', JSON.stringify(newItems), { expires: 2 })
    return {
      ...state,
      cartItems: newItems,
    }
  }
  case REMOVE_FROM_CART: {
    const newItems = state.cartItems.filter(
      (item) => item.productCartId !== action.productCartId,
    )
    Cookies.set('cartItems', JSON.stringify(newItems), { expires: 2 })
    return {
      ...state,
      cartItems: newItems,
    }
  }
  case SEARCH_BY_PHRASE: {
    if (action.phrase.length < 3) {
      return state
    }
    const re = new RegExp(action.phrase, 'i')
    const productsFiltered = state.products.filter(
      (item) => item.name.search(re, 'regex') !== -1,
    )
    return {
      ...state,
      productsFiltered,
    }
  }
  case SORT_PRODUCTS: {
    let productsSorted = sortBy(
      state.productsFiltered,
      (product) => {
        if (typeof product[action.sortingType] === 'string') {
          return product[action.sortingType].toLowerCase()
        }
        return product[action.sortingType]
      },
    )
    productsSorted = action.sortingDirection === 'descending'
      ? productsSorted.reverse() : productsSorted
    return {
      ...state,
      productsFiltered: productsSorted,
    }
  }
  default: return state
  }
}
