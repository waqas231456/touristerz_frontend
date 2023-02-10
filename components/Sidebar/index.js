import Profile from "./logo";
import Avatar from "./avator";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import sidebarStyle from "@/styles/sidebar.module.css";
import Link from "next/link";
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
          <Link href="/Dashboard" legacyBehavior>
            <button className={sidebarStyle.button}>DashBoard</button>
          </Link>
          <br></br>
          <Link href="/Booking" legacyBehavior>
            <button className={sidebarStyle.button}> Booking Order </button>
          </Link>
          <br></br>
          <Link href="/pending" legacyBehavior>
            <button className={sidebarStyle.button}> Pending Order </button>
          </Link>
          <br></br>
          <Link href="/Cancelled" legacyBehavior>
            <button className={sidebarStyle.button}> Cancelled Order </button>
          </Link>
          <br></br>
          <Link href="/Review" legacyBehavior>
            <button className={sidebarStyle.button}>Reviews</button>
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
