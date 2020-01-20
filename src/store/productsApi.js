import axios from 'axios'

const API_URL = 'http://private-1c19e-reactlesson.apiary-mock.com/products'

export default {
  getProducts: (cb) => {
    axios.get(API_URL).then((products) => cb(products.data))
  },
}
