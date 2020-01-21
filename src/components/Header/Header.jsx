import React from 'react'

const LOGO = require('@images/logo.png')

const Header = () => (
  <header className="header-app">
    <img className="header-app--logo" src={LOGO} alt="Logo" />
    My-shop application
  </header>
)

export default Header
