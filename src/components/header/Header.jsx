import { Link } from "react-router-dom";
import "./Header.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { CgShoppingCart } from "react-icons/cg";
import { useContext } from "react";
import { CartContext } from "../../Features/ContextProvider";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="fixed-top">
      <header className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ul className="social-network">
                <li>
                  <Link className="waves-effect waves-dark">
                    <FaFacebook className="icon" />
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" href="#">
                    <i className="fa fa-twitter"></i>
                    <BsTwitter className="icon" />
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" href="#">
                    <LiaLinkedin className="icon" />
                  </Link>
                </li>
                <li>
                  <Link className="waves-effect waves-dark" to={"/cart"}>
                    <CgShoppingCart />
                    {cart.length}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar navbar-expand-lg navbar-dark mx-background-top-linear">
        <div className="container">
          <Link className="navbar-brand" href="index.html">
            Tasawar Mahmood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" href="#">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Fruits
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Sea food
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Vegetables
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
