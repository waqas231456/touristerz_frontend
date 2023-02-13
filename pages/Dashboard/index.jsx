import { Layout } from "@/components";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import Style from "./style.module.css";
import Router from "next/router";
import profile from "./profile.jpg";
import ChangePassword from "../ChangePassword";

const Dashboard = () => {
  const managehandler = () => {
    localStorage.removeItem("isLoggedIn");
    Router.push("/ManageProfie");
    // Router.push("/pending");

  };
  const changepassword = () => {
    localStorage.removeItem("isLoggedIn");
    Router.push("/ChangePassword");
  }
  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    Router.push("/Login");
  }
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
                    onClick={managehandler}
                    style={{ paddingRight: "20px", float: "left" }}
                  >
                    Manage Profile
                  </Link>
                  <Link
                    href="#"
                    style={{ paddingRight: "10px", float: "left" }}
                    onClick={changepassword}
                  >
                    
                    Change Password
                  </Link>
                  <Link
                    href="#"
                    style={{ paddingRight: "20px", float: "left" }}
                    onClick={logout}
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
            Welcome to User DashBoard
          </h1>
        </div>

        <div className={Style.flex}>
          <div className={Style.flex2}>
            <div className={Style.Card1} style={{ textAlign: "left" }}>
              {/* <FontAwesomeIcon icon="faYoutube" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}

              <h3 className={Style.text}>Total Booked</h3>

              <span className={Style.text}> check at detail of booked</span>
              <br></br>
              <h6 className={Style.text}>Number of Booked</h6>
            </div>
            <div className={Style.Card1}>
             
              <h3 className={Style.text}>Pending Booking</h3>
              <span className={Style.text}> check at detail of pending</span>
              <br></br>
              <h6 className={Style.text}>Number of Pending Booked</h6>
            </div>
          </div>

          <br />
          <div className={Style.flex1}>
            <div className={Style.Card2}>
              
              <h3 className={Style.text}>Cancelled Booking</h3>
              <span className={Style.text}> check at detail of cancelled</span>
              <br></br>
              <h6 className={Style.text}>Number of Cancelled Booked</h6>
            </div>
            <div className={Style.Card2}>
              
              <h3 className={Style.text}>Reviews </h3>
              <span className={Style.text}> check at detail of reviews</span>
              <br></br>
              <h6 className={Style.text}>Number of Reviews </h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
