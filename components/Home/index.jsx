import React from "react";
import logo from "../Sidebar/logo.jpeg";
import style from "./Style.module.css";
import Link from "next/link";
import LayoutHome from "../LayoutHome";


function Card() {
  return (
    <LayoutHome>
      <div className={style.box}>
        <h1 className={style.h1}>Let’s Make Your Best Trip Ever</h1>
        <p className={style.p}>
          Palne and book your perfect trip with expert advices destination
          information and insprition from us
        </p>
        <input
          type="search"
          className={style.search}
          placeholder=" Search Agencies and services provider"
        />
      </div>

      <div>
        <h1 className={style.Service}>Choose Agency</h1>
        <p className={style.p1}>Touristerz top rated Agency for you </p>
      </div>
      <div className={style.flex}>
        <div className={style.card}>
          <div className={style.pic}></div>
          <div className={style.detail}>
            <h1 className={style.title}>Title</h1>
            <p className={style.name}> Username</p>
            <p className={style.name}> Username</p>
            <div className={style.flex1}>
              <h1 className={style.price}>Rs: 2000</h1>
              <button className={style.button}> Book </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "520px" }}>
        <h1 className={style.Service}>Choose Services</h1>
        <p className={style.p1}>Touristerz top rated Services for you </p>
      </div>
      <div className={style.flex}>
        <div className={style.card1}>
          <div className={style.card}>
            <div className={style.pic}></div>
            <div className={style.detail}>
              <h1 className={style.title}>Title</h1>
              <p className={style.name}> Username</p>
              <p className={style.name}> Username</p>
              <div className={style.flex1}>
                <h1 className={style.price}>Rs: 2000</h1>
                <button className={style.button}> Book </button>
              </div>
            </div>
          </div>
        </div>
        <div className={style.card1}>
          <div className={style.card}>
            <div className={style.pic}></div>
            <div className={style.detail}>
              <h1 className={style.title}>Title</h1>
              <p className={style.name}> Username</p>
              <p className={style.name}> Username</p>
              <div className={style.flex1}>
                <h1 className={style.price}>Rs: 2000</h1>
                <button className={style.button}> Book </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutHome>
  );
}

export default Card;
