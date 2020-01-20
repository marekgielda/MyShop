import React from 'react'
import { arrayOf, shape } from 'prop-types'
import { connect } from 'react-redux'

import './ProductList.css'
import ProductItem from './ProductItem'
import { Product } from './Product'

const List = ({ products }) => (
  <section className="product-list">
    {products.map(
      (product) => (
        <ProductItem
          key={product.id}
          product={product}
        />
      ),
    )}
  </section>
)

List.defaultProps = {
  products: [],
}

List.propTypes = {
  products: arrayOf(shape(Product)),
}

const mapStateToProps = (state) => ({
  products: state.productsFiltered,
})

const mapDispatchToProps = () => ({})

export const ProductsList = connect(mapStateToProps, mapDispatchToProps)(List)
