import React, { useState } from 'react'
import {
  string, number, shape, func,
} from 'prop-types'
import Modal from '@material-ui/core/Modal'

const CartItem = ({ data, index, onRemove }) => {
  const [modalOpen, setModalOpen] = useState(false)

  if (data) {
    return (
      <>
        <li aria-hidden onClick={() => setModalOpen(true)}>
          <button type="button" onClick={() => onRemove(data.cartId)}>
          x
          </button>
          {`${index + 1} - ${data.name} - ${data.price} zł`}
        </li>
        <Modal
          className="modal"
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        >
          <div className="modal-content">
            <img
              className="product-box--image"
              src={data.photo}
              alt={data.name}
            />
            <h2>{data.name}</h2>
            <pre>{`Cena: ${data.price}zł`}</pre>
            <p>{data.description}</p>
          </div>
        </Modal>
      </>
    )
  } return null
}

CartItem.defaultProps = {
  data: {},
  index: null,
  onRemove: () => {},
}

CartItem.propTypes = {
  data: shape({
    id: number,
    name: string,
    price: number,
    cartId: string,
  }),
  index: number,
  onRemove: func,
}

export default CartItem
