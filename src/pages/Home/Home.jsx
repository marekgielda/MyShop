import React from 'react'

import Header from '@components/Header/Header'
import Filters from '@components/Filters/Filters'
import Cart from '@components/Cart/Cart'
import ProductsList from '@components/ProductsList/ProductsList'
import Footer from '@components/Footer/Footer'

const Home = () => (
  <div id="root">
    <div className="App">
      <Header />
      <Filters />
      <div className="container">
        <ProductsList />
        <Cart />
      </div>
      <Footer />
    </div>
  </div>
)

export default Home
