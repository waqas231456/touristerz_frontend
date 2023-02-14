import Layout from "../Layout";
import Avatar from "../Sidebar/avator";
import Style from "./style.module.css";
function Dashboard() {
  return (
    <Layout>
      <div className={Style.dashboard}>
        <div>
          <span className={Style.set}>Setting</span>
          <h1 className={Style.h1}>Welcome to User DashBoard</h1>
        </div>

        <div className={Style.flex}>
          <div className={Style.flex2}>
            <div className={Style.Card1} style={{ textAlign: "left" }}>
              {/* <FontAwesomeIcon icon="faYoutube" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h1 className={Style.text}>Number</h1>
              <h3 className={Style.text}>Agencey</h3>
             
            </div>


            <div className={Style.Card1}>
              {/* <FontAwesomeIcon icon="user" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Service Provider</h3>
              <h6 className={Style.text}>Number of Registered Service Provider</h6>
            </div>
          </div>

          <br />
          <div className={Style.flex1}>
            <div className={Style.Card2}>
              {/* <FontAwesomeIcon icon="user" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Plans</h3>
              <h6 className={Style.text}>Number of Total Tour Plans</h6>
            </div>
            <div className={Style.Card2}>
              {/* <FontAwesomeIcon icon="arrowdown" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Services </h3>
              <h6 className={Style.text}>Number of Total services</h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
