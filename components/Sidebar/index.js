import Profile from "./logo";
import Avatar from "./avator";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import sidebarStyle from "@/styles/sidebar.module.css";
import Link from "next/link";
import { useState } from "react";
// import Button from "./Buuton";
function Sidebar() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(true);

  // const role = localStorage.getItem("role")
  // if(role== "admin"){
  //   setadmin(true)
  //   console.log(admin);
  // }else if (role== "Service Provider"){
  //   setData(true)
  //   console.log(data);
  // }

  return (
    <>
      <div className={sidebarStyle.flex}>
        <div className={sidebarStyle.logo}>
          <Profile />
        </div>
        <div className={sidebarStyle.avator}>
          <Avatar />
        </div>
        <div className={sidebarStyle.h3}>
          <h3> Hamayoun Mushtaq </h3>
        </div>
        <div>
          <Link href="/Dashboard" legacyBehavior>
            <button className={sidebarStyle.button} hidden={user}>
              DashBoard
            </button>
          </Link>
          <br></br>
          <Link href="/Booking" legacyBehavior>
            <button className={sidebarStyle.button} hidden={user}>
              {" "}
              Booking Order{" "}
            </button>
          </Link>
          <br></br>
          <Link href="/pending" legacyBehavior>
            <button className={sidebarStyle.button} hidden={user}>
              {" "}
              Pending Order{" "}
            </button>
          </Link>
          <br></br>
          <Link href="/Cancelled" legacyBehavior>
            <button className={sidebarStyle.button} hidden={user}>
              {" "}
              Cancelled Order{" "}
            </button>
          </Link>
          <br></br>
          <Link href="/Dashboard" legacyBehavior>
            <button className={sidebarStyle.button} hidden={admin}>
              Admin DashBoard
            </button>
          </Link>
          <br></br>
          <Link href="/Booking" legacyBehavior>
            <button className={sidebarStyle.button} hidden={admin}>
              Users
            </button>
          </Link>
          <br></br>
          <Link href="/Review" legacyBehavior>
            <button className={sidebarStyle.button} hidden={admin}>
              Categories
            </button>
          </Link>
          <br></br>

          {/* <p style={{ marginLeft: "8%" }}>
          
            Setting
          </p>
          <p style={{ marginLeft: "8%" }}>
          
            Logout
          </p> */}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
