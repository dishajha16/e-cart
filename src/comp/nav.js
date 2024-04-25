import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = ({ search, setSearch, searchproduct }) => {
  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping When Shopping upto $1000</p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img
              src="image/logo.webp"
              alt="logo"
              height="100px"
              width="500px"
            ></img>
          </div>
          <div className="search_box">
            <input
              type="text"
              value={search}
              placeholder="search"
              onChange={(e) => setSearch(e.target.value)}
            ></input>
            <button onClick={searchproduct}>
              <AiOutlineSearch />
            </button>
          </div>
          Shop tension free!
        </div>
        <div className="last_header">
          <div className="user_profile"></div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>flat 10% over all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
