



import Footer from "../Footer"
import Card from "../Home"
import Nav from "../NavBar"
import style from "./Style.module.css"

const LayoutHome = ({children}) => {
  return (
    <>
   
      <Nav/>
       <div className={style.box}>
        {children}
        </div> 
      
       <Footer/>
    
    </>
  )
}

export default LayoutHome