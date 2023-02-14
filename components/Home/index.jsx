import React, { useEffect, useState } from "react";
import logo from "../Sidebar/logo.jpeg";
import style from "./Style.module.css";
import Link from "next/link";
import bg from './bg.jpg'
import LayoutHome from "../LayoutHome";
import Image from "next/image";


function Card() {
  const [services, setServices] = useState([])

  useEffect(()=>{
    setServices([{name:'Service 1',price:300},{name:'Service 1',price:300}, {name:'Service 1',price:300}, {name:'Service 1',price:300},{name:'Service 1',price:300}, {name:'Service 1',price:300}])
  },[])
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
        <h1 className={style.Service}>Choose Services</h1>
        <p className={style.p1}>Touristerz top rated Services for you </p>
      </div>
      <div className={style.flex}>
          {console.log(services)}
          {services.map((item, index) => {
            return (
              <div className={style.card}>
                <div class="container">
                  <Image src={bg} style={{width:'100%', height:300}} />
                  <h4><b>{item.name}</b></h4> 
                  <p>{item.price}</p> 
                </div>
              </div>
            )
          })}
      </div>
    </LayoutHome>
  );
}

export default Card;
