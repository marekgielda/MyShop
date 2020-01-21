import React from 'react'
import { arrayOf, shape } from 'prop-types'
import { connect } from 'react-redux'

import ProductItem from './ProductItem'
import { ProductType } from './ProductType'

const ProductList = ({ products }) => (
  <section className="product-list">
    {products && products.map(
      (product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ),
    )}
  </section>
)

ProductList.propTypes = {
  products: arrayOf(shape(ProductType)).isRequired,
}

const mapStateToProps = (state) => ({
  products: state.productsFiltered,
})

export default connect(mapStateToProps)(ProductList)
