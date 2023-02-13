import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import buttonStyle from '@/styles/Button.module.css'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/forgot",
        formData
      );
      console.log("data :", res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={style.log}>
        <div className={style.box}>
          <div className={style.signin}>
            <form>
              <label className={style.label}> Password Reset </label>

              <input
                className={style.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />

              <Button name="Send" handleChange={handleSubmit} button={buttonStyle.button}/>

              <h4 className={style.p1}>
                Note:Forgot link will be send to the above email
              </h4>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
