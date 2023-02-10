import Button from "@/components/Button";
import Layout from "@/components/Layout";
import React from "react";
import Style from "./styler.module.css";
import axios from "axios";
import { useEffect,useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Review() {
  const [ratinData, setRatingData] = useState({rating :"" });
  const [commentData, setCommentData] = useState({comment :"" });

  

  const handleChange = (event) => {
 
    console.log(commentData)
    console.log(ratinData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/sign-up",
        formData
      );
      console.log("data :", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <Layout>

      
      <h2 className={Style.fh2} >WE APPRECIATE YOUR REVIEW!</h2>
      <h6 className={Style.fh2} >
        Your review will help us to improve our web hosting quality products,
        and customer services.
      </h6>

      <form className={Style.feedback} action="">
        <div className={Style.pinfo}>Rate our overall services.</div>

        <div className={Style.formgroup}>
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-heart"></i>
              </span>
              <select className={Style.formcontrol} id="rate" 
              onChange={(e)=>setRatingData(e.target.value)}>
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
                {/* <i className=fa fa-pencil"></i> */}
              </span>
              <textarea
                className={Style.formcontrol}
                id="review"
                rows="3"
                onChange={handleChange}
                value={(e)=>setCommentData(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>

        <Button name="Submit"/>
      </form>
    </Layout>
  );
}

export default Review;



