import React, { useState } from 'react'
import {
  arrayOf, shape, string, number, func,
} from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'

import { removeFromCart } from '@store/actions'
import CartItem from './CartItem'

function Cart({ cartItems, onRemove }) {
  const [toastOpen, setToastOpen] = useState(false)

  const totalPrice = cartItems.length && cartItems
    .reduce((sum, item) => sum + item.price, 0)

  const handleProductRemove = (productCartId) => {
    onRemove(productCartId)
    setToastOpen(true)
  }

  return (
    <>
      <section className="user-cart">
        <h4>Twój koszyk</h4>
        <ul className="user-cart--list">
          {cartItems.map(
            (item, index) => (
              <CartItem
                key={item.productCartId}
                index={index}
                data={item}
                onRemove={(productCartId) => handleProductRemove(productCartId)}
              />
            ),
          )}
        </ul>
        <section className="total-price">
          {`Podsumowanie: ${totalPrice} zł`}
        </section>
      </section>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={toastOpen}
        autoHideDuration={3000}
        onClose={() => setToastOpen(false)}
        message="Produkt usunięty z koszyka"
      />
    </>
  )
}

Cart.propTypes = {
  cartItems: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    price: number.isRequired,
  })).isRequired,
  onRemove: func.isRequired,
}

const mapStateToProps = (state) => ({ cartItems: state.cartItems })

const mapDispatchToProps = (dispatch) => ({
  onRemove: (productCartId) => {
    dispatch(removeFromCart(productCartId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
