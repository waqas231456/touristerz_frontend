import Button from "@/components/Button";
import Layout from "@/components/Layout";
import React from "react";
import Style from "./styler.module.css";
import axios from "axios";
import { useEffect,useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Review() {
  const [reviewData, setReviewData] = useState({rating:'',comment:''})

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/review/1/2",
        reviewData
      );
      console.log("data :", res);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Layout>

      
      <h2 className={Style.fh2} >WE APPRECIATE YOUR REVIEW!</h2>
      <h6 className={Style.fh2} >
        Your review will help us to improve our Services.
      </h6>

      <form className={Style.feedback} onSubmit={handleSubmit}>
        <div className={Style.pinfo}>Rate our overall services.</div>

        <div className={Style.formgroup}>
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-heart"></i>
              </span>
              <select className={Style.formcontrol} id="rate" 
              
              onChange={(e)=>setReviewData({...reviewData,rating:e.target.value })}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
        </div>

        <div className={Style.pinfo}>Write your feedback.</div>

        <div className={Style.formgroup}>
          <div className={Style.inputGroupContainer}>
            <div className={Style.inputgroup}>
              <span className={Style.inputgroupaddon}>
              </span>
              <textarea
                className={Style.formcontrol}
                id="review"
                rows="3"
                onChange={(e)=>setReviewData({...reviewData,comment:e.target.value })}
                value={reviewData.comment}
              ></textarea>
            </div>
          </div>
        </div>

        <Button  button={Style.button} name="Submit"/>
      </form>
    </Layout>
  );
}

export default Review;



