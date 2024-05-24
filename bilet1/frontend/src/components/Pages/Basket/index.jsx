import React from "react";
import style from "./Basket.module.scss";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBasket,
  decreaseCount,
  deleteBasket,
  increaseCount,
} from "../../../redux/BasketSlice";
import { TiDelete } from "react-icons/ti";
import { addToFav, deleteFav } from "../../../redux/FavSlice";

const Basket = () => {
  const { basket } = useSelector((store) => store.basket);
  const { fav } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.products}>
        <div className={style.container}>
          <div className={style.headtext}>
            <h1>Basket</h1>
          </div>

          <div className={style.gridStyle}>
            {basket?.map((elem) => {
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
                      {fav?.find((el) => el._id == elem._id) ? (
                        <FaHeart onClick={() => dispatch(deleteFav(elem))} />
                      ) : (
                        <FaRegHeart onClick={() => dispatch(addToFav(elem))} />
                      )}
                      <p>{elem.like}</p>
                    </div>
                  </div>

                  <p>{elem.description}</p>

                  <div className={style.count}>
                    <button onClick={() => dispatch(increaseCount(elem))}>
                      +
                    </button>
                    <span>{elem.count}</span>
                    <button onClick={() => dispatch(decreaseCount(elem))}>
                      -
                    </button>
                  </div>

                  <div className={style.buttons}>
                    <button className={style.cart}>CART</button>
                    <button className={style.view}>VIEW</button>
                  </div>

                  <TiDelete
                    onClick={() => dispatch(deleteBasket(elem))}
                    className={style.x}
                  />
                </div>
              );
            })}
          </div>
          <div>
            <button onClick={() => dispatch(clearBasket())}>
              Clear Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
