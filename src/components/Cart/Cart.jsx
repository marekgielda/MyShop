import React, { useState } from 'react'
import {
  arrayOf, shape, string, number, func,
} from 'prop-types'
import { connect } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'

import './Cart.css'
import { removeFromCart } from '../../store/actions'
import CartItem from './CartItem'

function Cart({ cartItems, onRemove }) {
  const [toastOpen, setToastOpen] = useState(false)

  const totalPrice = cartItems.length && cartItems
    .map((item) => item.price)
    .reduce((sum, num) => sum + num)

  const handleProductRemove = (cartId) => {
    onRemove(cartId)
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
                key={item.cartId}
                index={index}
                data={item}
                onRemove={(cartId) => handleProductRemove(cartId)}
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

Cart.defaultProps = {
  cartItems: [],
  onRemove: () => {},
}

Cart.propTypes = {
  cartItems: arrayOf(shape({
    id: number.isRequired,
    name: string.isRequired,
    price: number.isRequired,
  })),
  onRemove: func,
}

const mapStateToProps = (state) => ({ cartItems: state.cartItems })

const mapDispatchToProps = (dispatch) => ({
  onRemove: (cartId) => {
    // eslint-disable-next-line
    console.debug('cartId', cartId)
    dispatch(removeFromCart(cartId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
