import React from 'react'

import Cart from '@components/Cart/Cart'
import Browser from '@components/Browser/Browser'
import {
  Header,
  ProductsList,
  Footer,
} from '@components'
import './Home.css'

export default function Home() {
  return (
    <div id="root">
      <div className="App">
        <Header />
        <Browser />
        <div className="container">
          <ProductsList />
          <Cart />
        </div>
        <Footer />
      </div>
    </div>
  )
}
