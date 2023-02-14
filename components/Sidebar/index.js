import Profile from "./logo";
import Avatar from "./avator";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import sidebarStyle from "@/styles/sidebar.module.css";
import Link from "next/link";
import Button from "../Button";
import { useState } from "react";
// import Button from "./Buuton";
function Sidebar() {
  const [admin, setAdmin] = useState(false);
  const [user, setUser] = useState(true);

  const role = localStorage.getItem("role")
  if(role== "admin"){
    setadmin(true)
    console.log(admin);
  }else if (role== "Service Provider"){
    setData(true)
    console.log(data);
  }

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
          <Link href="/Dashboard" >
            <Button button={sidebarStyle.button} name="Dashboard" />
            
          </Link>
          <br></br>
          <Link href="/Booking" >
          <Button button={sidebarStyle.button} name="Successful Booking" />
            
          </Link>
          <br></br>
          <Link href="/pending" >
          <Button button={sidebarStyle.button} name=" Pending Booking" />
           
          </Link>
          <br></br>
          <Link href="/Cancelled" >
          <Button button={sidebarStyle.button} name="Cancelled Booking" />
          </Link>
        

       
        </div>
      </div>
    </>
  );
}

export default Sidebar;
