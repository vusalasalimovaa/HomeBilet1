import React from "react";
import style from "./Fav.module.scss";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  clearBasket,
  decreaseCount,
  deleteBasket,
  increaseCount,
} from "../../../redux/BasketSlice";
import { TiDelete } from "react-icons/ti";
import { clearFav, deleteFav } from "../../../redux/FavSlice";

const Fav = () => {
  const { fav } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.products}>
        <div className={style.container}>
          <div className={style.headtext}>
            <h1>Wishlist</h1>
          </div>

          <div className={style.gridStyle}>
            {fav?.map((elem) => {
              return (
                <div key={elem._id} className={style.gridItems}>
                  <img src={elem.image} alt="" />
                  <p>{elem.title}</p>

                  <div className={style.starandheart}>
                    <div className={style.star}>
                      <FaStar />
                      <p>{elem.rate}</p>
                    </div>

                    <div className={style.heart}>
                      <FaHeart onClick={() => dispatch(deleteFav(elem))} />
                      <p>{elem.like}</p>
                    </div>
                  </div>

                  <p>{elem.description}</p>

                  <div className={style.buttons}>
                    <button
                      onClick={() => dispatch(addToBasket(elem))}
                      className={style.cart}
                    >
                      CART
                    </button>
                    <button className={style.view}>VIEW</button>
                  </div>

                  <TiDelete
                    onClick={() => dispatch(deleteFav(elem))}
                    className={style.x}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button onClick={() => dispatch(clearFav())}>Clear Fav</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fav;
