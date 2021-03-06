import {
  bool, number, string,
} from 'prop-types'

export const ProductType = {
  id: number.isRequired,
  name: string.isRequired,
  description: string.isRequired,
  photo: string.isRequired,
  price: number.isRequired,
  in_stock: bool.isRequired,
}
