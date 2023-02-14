import { Layout } from '@/components'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import Style from "./style.module.css";
import Router from "next/router";
import profile from "./profile.jpg";
import axios from 'axios';

const Dashboard = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    // console.log("i amahere")

    const getdata = async () => {
      try {
        axios.get(`http://localhost:5000/api/dash/data`).then((res) => {
          console.log(res.data);
          setData(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, []);
 
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
          <div className={Style.Card1} style={{ textAlign: "center" }}>
          
            <h1 className={Style.text}>{data.totalUsers}</h1>
            <h3 className={Style.text}>Total Users</h3>

           
          </div>
          <div className={Style.Card1} style={{ textAlign: "center" }}>
            
            <h1 className={Style.text}>{data.Agencey}</h1>
            <h3 className={Style.text}>Total Users</h3>
          </div>
        </div>

        <br />
        <div className={Style.flex1}>
          <div className={Style.Card2} style={{ textAlign: "center" }}>
           
            <h1 className={Style.text}>{data.Services}</h1>
            <h3 className={Style.text}>Total Users</h3>
          </div>
          <div className={Style.Card2} style={{ textAlign: "center" }}>
           
            <h1 className={Style.text}>{data.Active}</h1>
            <h3 className={Style.text}>Total Users</h3>
          </div>
        </div>
      </div>
    </div>
  </Layout>
        
  )
}

export default Dashboard