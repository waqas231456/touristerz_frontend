import React from "react";
import logo from "../Sidebar/Group 53.svg";
import style from "./Style.module.css";
import Link from "next/link";
import Image from "next/image";

function Nav() {
  return (
    <div>
      <ul className={style.ul}>
        <li className={style.li}>
          <a>
            <Image src={logo} alt="image" />{" "}
          </a>
        </li>
        <li className={style.li}>
          <a className={style.active} herf="/">
            Home
          </a>
        </li>
        <li className={style.li}>
          <a herf="Services">Services</a>
        </li>
        <li className={style.li}>
          <a herf="Contact">Contact</a>
        </li>

        <div className={style.login}>
          <li className={style.li}>
            <Link href="/Login" legacyBehavior>
              Login
            </Link>
          </li>
          <li className={style.li}>
            <Link href="/SignUp" legacyBehavior>
              Rigister
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Nav;
