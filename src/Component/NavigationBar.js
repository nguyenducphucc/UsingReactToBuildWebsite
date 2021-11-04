import { Link } from "react-router-dom";
import logo from "../images/shape-square-cube-box-mirror-image-png-favpng-edDhTpW31BmDMzLaAQEMHNMns.jpg";

export default function NavigationBar() {
  return (
    <div>
      <div class="main-navigator">
        <Link to="/" class="logo">
          <img src={logo} alt="1" />
        </Link>
        <input class="search-bar" placeholder="Search..." />
        <div class="login-button">
          <Link to="/shoppingcart" class="navigator-button">
            Shopping Cart
          </Link>
        </div>
        <div class="login-button">
          <Link to="/login" class="navigator-button">
            Log in
          </Link>
          <div class="log-in-container">
            <div class="log-in">
              <Link to="/login" class="log-in-indirect">
                Log in
              </Link>
            </div>
            <div class="line-break" />
            <h5>Haven't had an account yet?</h5>
            <div class="sign-up">
              <Link to="/signup" class="sign-up-indirect">
                Create new account
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="second-navigator">
        <Link to="/" class="sec-navigator-button home-page">
          Home
        </Link>
        <Link to="/about" class="sec-navigator-button about-page">
          About
        </Link>
        <Link to="/men" class="sec-navigator-button men-page">
          Men
        </Link>
        <Link to="/women" class="sec-navigator-button women-page">
          Women
        </Link>
        <Link to="/kids" class="sec-navigator-button kids-page">
          Kids
        </Link>
        <Link to="/baby" class="sec-navigator-button baby-page">
          Baby
        </Link>
        <Link to="/sales" class="sec-navigator-button sales-page">
          Sales
        </Link>
        <div class="animated-sec-navigator-button-container">
          <div class="animated-sec-navigator-button-selector" />
        </div>
      </div>
    </div>
  );
}
