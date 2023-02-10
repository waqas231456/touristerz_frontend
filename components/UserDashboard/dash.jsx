import Layout from "../Layout";
import Avatar from "../Sidebar/avator";
import Style from "./style.module.css";
function Dashboard() {
  return (
    <Layout>
      <div className={Style.dashboard}>
        <div>
          <span className={Style.set}>Setting</span>
          <h1
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600px",
              fontSize: "58px",
              lineheight: "87px",
              paddingTop: "5px",
            }}
          >
            Welcome to User DashBoard
          </h1>
        </div>

        <div className={Style.flex}>
          <div className={Style.flex2}>
            <div className={Style.Card1} style={{ textAlign: "left" }}>
              {/* <FontAwesomeIcon icon="faYoutube" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Total Booked</h3>

              <span className={Style.text}> check at detail of booked</span>
              <br></br>
              <h6 className={Style.text}>Number of Booked</h6>
            </div>
            <div className={Style.Card1}>
              {/* <FontAwesomeIcon icon="user" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Pending Booking</h3>
              <span className={Style.text}> check at detail of booked</span>
              <br></br>
              <h6 className={Style.text}>Number of Pending Booked</h6>
            </div>
          </div>

          <br />
          <div className={Style.flex1}>
            <div className={Style.Card2}>
              {/* <FontAwesomeIcon icon="user" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Cancelled Booking</h3>
              <span className={Style.text}> check at detail of cancelled</span>
              <br></br>
              <h6 className={Style.text}>Number of Cancelled Booked</h6>
            </div>
            <div className={Style.Card2}>
              {/* <FontAwesomeIcon icon="arrowdown" style={{float:"right", marginRight:"9%", paddingTop:"3%"}}/> */}
              <h3 className={Style.text}>Reviews </h3>
              <span className={Style.text}> check at detail of reviews</span>
              <br></br>
              <h6 className={Style.text}>Number of Reviews </h6>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
