import React from "react";
import style from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <div className={style.hero}>
        <div className={style.container}>
          <div className={style.heroText}>
            <h1>Shop with us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam assumenda ea quo cupiditate facere deleniti fuga
              officia.
            </p>
            <div className={style.buttons}>
              <button className={style.shop}>SHOP NOW</button>
              <button className={style.club}>CLUB MEMBERSHIP</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
