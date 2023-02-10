import {Nav, Footer,Sidebar, UserDashboard} from "../index"
import style from "./Style.module.css"

const Layout = ({children}) => {
  return (
    <>
   
      {/* <Nav/> */}
        <Sidebar />
        {/* <UserDashboard/> */}
       <div className={style.box}>{children}</div> 
       {/* <Footer/> */}
    
    </>
  )
}

export default Layout