import React from "react";

import style from "./Style.module.css";


function Footer() {
  return (
    <div>
      <footer className={style.footer}>
                <hr style={{width: "100%" , marginBottom:"30px"}}/>
                <p >Copyright © 2021 TechLift by <span style={{fontweight: "bold"}}>Codeninja.</span> All Rights Reserved</p> 
            </footer>
    </div>
  );
}

export default Footer;
