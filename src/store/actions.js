import productsApi from './productsApi'
import { RECEIVE_PRODUCTS } from './ActionTypes'

const receiveProducts = (products) => ({
  type: RECEIVE_PRODUCTS,
  products,
})

export const getProducts = () => (dispatch) => {
  productsApi.getProducts((products) => {
    dispatch(receiveProducts(products))
  })
}
