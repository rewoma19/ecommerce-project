import { Link, NavLink } from "react-router";
// The difference between Link and NavLink is that NavLink knows which page is loaded. It adds a class / className called "active" to the link of the active page. NavLink shares the same props as Link (to)
// We could use this special "active" class / className to add some unique styling
import LogoWhite from "../assets/images/logo-white.png";
import MobileLogoWhite from "../assets/images/mobile-logo-white.png";
import SearchIcon from "../assets/images/icons/search-icon.png";
import CartIcon from "../assets/images/icons/cart-icon.png";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={LogoWhite} />
            <img className="mobile-logo" src={MobileLogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">3</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
