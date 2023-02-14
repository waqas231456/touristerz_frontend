import Profile from "./logo";
import Avatar from "./avator";

import sidebarStyle from "@/styles/sidebar.module.css";
import Link from "next/link";
import Button from "../Button";
import { useEffect, useState } from "react";
function Sidebar() {
  const [admin, setAdmin] = useState(true);
  const [user, setUser] = useState(true);
  const [services, setServices] = useState(true)
  const [userData, setUserData] = useState([])
  useEffect(()=>{
    const data = localStorage.getItem("user")
    setUserData(data)
  },[])
  if(userData?.roles_id== 1){
    setUser(true)
    setServices(true)
    setAdmin(false)
    console.log(admin);
  }else if (userData?.roles_id== 2){
    setAdmin(true)
    setUser(true)
    setServices(false)
  }else if(userData?.roles_id == 3){
    setAdmin(true)
    setUser(false)
    setServices(true)
  }

  return (
    <>
      <div className={sidebarStyle.flex}>
        <div className={sidebarStyle.logo}>
          <Profile src={userData?.image_url} />
        </div>
        <div className={sidebarStyle.avator}>
          <Avatar />
        </div>
        <div className={sidebarStyle.h3}>
          <h3> {userData?.name} </h3>
        </div>
        <div>
          <Link href="/Dashboard" >
            <Button button={sidebarStyle.button} name="Dashboard" hidden={user} />
            
          </Link>
          <br></br>
          <Link href="/Booking" >
          <Button button={sidebarStyle.button} name="Successful Booking" hidden={user} />
            
          </Link>
          <br></br>
          <Link href="/pending" >
          <Button button={sidebarStyle.button} name=" Pending Booking" hidden={user} />
           
          </Link>
          <br></br>
          <Link href="/Cancelled" >
          <Button button={sidebarStyle.button} name="Cancelled Booking" hidden ={user} />
          </Link>
          <Link href="/Cancelled" >
          <Button button={sidebarStyle.button} name="Admin Dashboard" hidden ={admin} />
          </Link>
          <Link href="/Cancelled" >
          <Button button={sidebarStyle.button} name="Manage User" hidden ={admin} />
          </Link>
          <Link href="/Cancelled" >
          <Button button={sidebarStyle.button} name="Categories" hidden ={user} />
          </Link>
          <Link href="/ServiceDashboard" >
          <Button button={sidebarStyle.button} name="Serivces Dashboard" hidden ={services} />
          </Link>
          <Link href="/ManageServices" >
          <Button button={sidebarStyle.button} name="Services" hidden ={services} />
          </Link>
          <Link href="/Cancelled" >
          <Button button={sidebarStyle.button} name="Review" hidden ={services} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
