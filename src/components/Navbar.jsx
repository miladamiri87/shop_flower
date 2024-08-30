import React from "react";
import logo from "../assets/logo.png.webp";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { logout_slice } from "../Store";

export default function Navbar({ location }) {
  const getLinkStyle = (path) => {
    return location.pathname === path
      ? { color: "#f45db4" }
      : { color: "black" };
  };
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user);

  return (
    <>
      <div className="nav_container">
        <img src={logo} />
        <div className="navbar_link">
          <Link id="home" to="" style={getLinkStyle("/")}>
            Home
          </Link>
          <Link id="shop" to="/shop" style={getLinkStyle("/shop")}>
            Shop
          </Link>
          <Link id="about" to="/about" style={getLinkStyle("/about")}>
            About
          </Link>
          <Link id="contact" to="/contact" style={getLinkStyle("/contact")}>
            Contact
          </Link>
        </div>
        <div className="icon_link">
          {selector.username_slice ? (
            <p style={{ color: "#f45db4", margin: "0" }}>
              {selector.username_slice}
            </p>
          ) : (
            <Link to="/login">
              <i
                className="bx bx-log-in-circle bx-tada"
                style={{ color: "#f45db4" }}
              ></i>
            </Link>
          )}
          {selector.username_slice ? (
            <button
              style={{ border: "none" , backgroundColor:"white"}}
              onClick={() => dispatch(logout_slice())}
            >
              <i
                className="bx bx-log-out-circle"
                style={{ color: "#f45db4" }}
              ></i>
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
