import React from "react";
import style from "./OurProducts.module.scss";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useGetAllProductQuery } from "../../../../services/product";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../../redux/BasketSlice";
import { addToFav } from "../../../../redux/FavSlice";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurProducts = () => {
  const { data: products } = useGetAllProductQuery();
  const { fav } = useSelector((store) => store.fav);
  // console.log(products);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.products}>
        <div className={style.container}>
          <div className={style.headtext}>
            <h5>POPULAR PRODUCTS</h5>
            <h1>Our Products</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>

          <div className={style.gridStyle}>
            {products?.map((elem) => {
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
                        <FaHeart />
                      ) : (
                        <FaRegHeart onClick={() => dispatch(addToFav(elem))} />
                      )}
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

                    <Link to={`/maindetail/${elem._id}`}>
                      <button className={style.view}>VIEW</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
