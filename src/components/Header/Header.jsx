import React from 'react'

import './Header.css'

const LOGO = require('@images/logo.png')

export function Header() {
  return (
    <header className="header-app">
      <img className="header-app--logo" src={LOGO} alt="Logo" />
    </header>
  )
}
