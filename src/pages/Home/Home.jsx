import React from 'react'
import './Home.css'

const LOGO = require('./../../images/logo.png')

function MainPage() {
  return (
    <div id="root">
      <div className="App">
        <header className="header-app">
          <img className="header-app--logo" src={LOGO} alt="Logo" />
        </header>
        <div className="container">
          <section className="product-list">
            <div className="search">
              <input className="search-input" placeholder="Szukaj..." />
            </div>
            <div className="product-box">
              <div>
                <img
                  className="product-box--image"
                  src="https://placeimg.com/140/180/people"
                  alt="Product"
                />
              </div>
              <div>
                <h2>Sony Play Station 4</h2>
                <pre>Cena: 1399zł</pre>
                <p>Poznaj bardziej smukłe, mniejsze PS4, które oferuje graczom niesamowite wrażenia z gier.</p>
                <button type="button">Dodaj do koszyka</button>
              </div>
            </div>
            <div className="product-box">
              <div>
                <img
                  className="product-box--image"
                  src="https://placeimg.com/140/180/nature"
                  alt="Product"
                />
              </div>
              <div>
                <h2>Xbox One X</h2>
                <pre>Cena: 1500zł</pre>
                <p>Na Xbox One X gra się jeszcze lepiej. Dzięki większej o 40% mocy niż na jakiejkolwiek innej konsoli.</p>
                <button type="button">Dodaj do koszyka</button>
              </div>
            </div>
            <div className="product-box">
              <div>
                <img
                  className="product-box--image"
                  src="https://placeimg.com/140/180/dog"
                  alt="Product"
                />
              </div>
              <div>
                <h2>Macbook PRO 2018</h2>
                <pre>Cena: 14900zł</pre>
                <p>
MacBook Pro - dotyk czyni cuda Jest niewiarygodnie smukły, lekki jak piórko, a do tego potężniejszy i
                  szybszy niż kiedykolwiek
                </p>
                <button type="button">Dodaj do koszyka</button>
              </div>
            </div>
            <div className="product-box">
              <div>
                <img
                  className="product-box--image"
                  src="https://placeimg.com/140/180/architecture"
                  alt="Product"
                />
              </div>
              <div>
                <h2>Macbook Air 2018</h2>
                <pre>Cena: 3600zł</pre>
                <p>11-calowy MacBook Air działa bez ładowania baterii do 9 godzin, a 13-calowy - nawet 12.</p>
                <button type="button">Dodaj do koszyka</button>
              </div>
            </div>
            <div className="product-box">
              <div>
                <img
                  className="product-box--image"
                  src="https://placeimg.com/140/180/tech"
                  alt="Product"
                />
              </div>
              <div>
                <h2>iPhone X</h2>
                <pre>Cena: 7299zł</pre>
                <p>iPhone X to telefon, który nie tyle posiada ekran, ile po prostu sam tym ekranem jest.</p>
                <button type="button" disabled>Dodaj do koszyka</button>
              </div>
            </div>
          </section>
          <section className="user-cart">
            <h4>Twój koszyk</h4>
            <ul className="user-cart--list">
              <li>
                <button type="button">x</button>
                0 - Sony Play Station 4 - 1399 zł
              </li>
              <li>
                <button type="button">x</button>
                1 - Xbox One X - 1500 zł
              </li>
              <li>
                <button type="button">x</button>
                2 - Macbook PRO 2018 - 14900 zł
              </li>
            </ul>
            <section className="total-price">Podsumowanie: 17799 zł</section>
          </section>
        </div>
        <footer className="footer">Copyright by my-shop - 2018</footer>
      </div>
    </div>
  )
}

export default MainPage
