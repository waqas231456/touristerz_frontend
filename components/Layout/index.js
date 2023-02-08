import {Nav, Footer} from "../index"

const Layout = ({children}) => {
  return (
    <>
        <Nav />
        {children}
        <Footer />
    </>
  )
}

export default Layout