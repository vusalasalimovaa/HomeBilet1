import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { basket } = useSelector((store) => store.basket);
  const { fav } = useSelector((store) => store.fav);
  let basketCount = basket?.reduce((acc, elem) => (acc += elem.count), 0);
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.navbarStyle}>
            <h1>Selling.</h1>
            <div className={style.textItems}>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Products</Link>
                </li>
                <li>
                  <Link>About us</Link>
                </li>
                <li>
                  <Link>Special</Link>
                </li>
                <li>
                  <Link>Testimonials</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>

            <div
              style={{ display: "flex", gap: "15px" }}
              className={style.homeandicons}
            >
              <div className={style.home}>
                <Link to="/">
                  <IoHomeOutline />
                </Link>
              </div>

              <div className={style.icons}>
                <Link style={{ display: "flex" }} to="/basket">
                  <SlBasket />
                  {basketCount}
                </Link>
                <Link style={{ display: "flex" }} to="/fav">
                  <FaRegHeart />
                  <span>{fav.length}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
