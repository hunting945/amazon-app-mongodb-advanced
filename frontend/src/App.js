import React from 'react';
import './App.css';

function App() {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
            </button>
          <a href="index.html">amazona</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign in</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Regular Fit Shirt</a>
                </div>
                <div className="product-brand">BOSS</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d2.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Fit Shirt</a>
                </div>
                <div className="product-brand">BOSS</div>
                <div className="product-price">$50</div>
                <div className="product-rating">4.2 Stars (8 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d3.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Relaxed Fit Shirt</a>
                </div>
                <div className="product-brand">BOSS</div>
                <div className="product-price">$70</div>
                <div className="product-rating">4.5 Stars (8 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d4.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Regular Fit Pants</a>
                </div>
                <div className="product-brand">BOSS</div>
                <div className="product-price">$70</div>
                <div className="product-rating">4.5 Stars (8 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d5.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Slim Fit Pants</a>
                </div>
                <div className="product-brand">BOSS</div>
                <div className="product-price">$70</div>
                <div className="product-rating">4.5 Stars (8 Reviews)</div>
              </div>
            </li>
            <li>
              <div className="product">
                <img className="product-image" src="/images/d6.jpg" alt="product" />
                <div className="product-name">
                  <a href="product.html">Relaxed Fit Pants</a>
                </div>
                <div className="product-brand">BOSS</div>
                <div className="product-price">$70</div>
                <div className="product-rating">4.5 Stars (8 Reviews)</div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        All right reserved.
    </footer>
    </div>
  );
}

export default App;
