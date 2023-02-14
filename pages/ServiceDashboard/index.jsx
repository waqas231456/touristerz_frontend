import { Layout } from '@/components'
import Image from 'next/image';
import React from 'react'
import Link from "next/link";
import Style from "./style.module.css";
import Router from "next/router";
import profile from "./profile.jpg";

const ServiceDashboard = () => {
  const chnagehandle = () => {
    localStorage.removeItem("isLoggedIn");
    Router.push("/Cancelled");
    Router.push("/pending");
  };
  return (
    <Layout>
    <div className={Style.dashboard}>
      <div>
        <ul className={Style.ul}>
          <li>
            <a>
              <Image
                src={profile}
                alt="HM"
                style={{
                  height: "40px",
                  width: "30px",
                  borderRadius: "40px",
                  marginLeft: "90px",
                  marginBottom: "1px",
                }}
              />
            </a>
            <ul className={Style.dropdown}>
              <li>
                <Link
                  href="#"
                  onClick={chnagehandle}
                  style={{ paddingRight: "20px", float: "left" }}
                >
                  Manage Profile
                </Link>
                <Link
                  href="#"
                  style={{ paddingRight: "10px", float: "left" }}
                >
                  Change Password
                </Link>
                <Link
                  href="#"
                  style={{ paddingRight: "20px", float: "left" }}
                  onClick={chnagehandle}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <h1
          style={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "600px",
            fontSize: "54px",
            lineheight: "87px",
            paddingTop: "5px",
            paddingRight: "250px",
          }}
        >
          Welcome to Service DashBoard
        </h1>
      </div>

      <div className={Style.flex}>
          <div className={Style.Card1} style={{ textAlign: "left" }}>
            <h1 className={Style.text}>Number</h1>
            <h3 className={Style.text}>Services</h3>
            <span className={Style.text}> check at detail of booked</span>
            <br></br>
          </div>
          <div className={Style.Card1}>
            <h1 className={Style.text}>Number</h1>
            <h3 className={Style.text}>Orders</h3>
            <span className={Style.text}> check at detail of pending</span>
            <br></br>
          </div>
        </div>
    </div>
  </Layout>
        
  )
}

export default ServiceDashboard