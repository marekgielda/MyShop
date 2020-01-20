import React, { useState } from 'react'
import {
  func, shape,
} from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'

import { addToCart } from '../../store/actions'
import { Product } from './Product'

const ProductItem = (props) => {
  const { product, onAddToCart } = props
  const [toastOpen, setToastOpen] = useState(false)

  const handleAddToCart = (productData) => {
    onAddToCart(productData)
    setToastOpen(true)
  }

  return (
    <>
      <div className="product-box">
        <div>
          <img
            className="product-box--image"
            src={product.photo}
            alt={product.name}
          />
        </div>
        <div>
          <h2>{product.name}</h2>
          <pre>{`Cena: ${product.price}zł`}</pre>
          <p>{product.description}</p>
          <button
            type="button"
            onClick={() => handleAddToCart(product)}
          >
          Dodaj do koszyka
          </button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message="Dodano do koszyka"
      />
    </>
  )
}

ProductItem.defaultProps = {
  product: {},
}

ProductItem.propTypes = {
  onAddToCart: func.isRequired,
  product: shape(Product),
}

const mapDispatchToProps = (dispatch) => ({
  onAddToCart: (product) => {
    dispatch(addToCart(product))
  },
})

export default connect(null, mapDispatchToProps)(ProductItem)
