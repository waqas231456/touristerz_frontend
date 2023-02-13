import Profile from "./logo";
import Avatar from "./avator";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import sidebarStyle from "@/styles/sidebar.module.css";
import Link from "next/link";
import Button from "../Button";
// import Button from "./Buuton";
function Sidebar() {
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
