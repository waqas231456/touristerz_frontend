import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import buttonStyle from '@/styles/Button.module.css'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

function ChangePassword() {
  const [formData, setFormData] = useState({
    ChangePassword: "",
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
        "http://localhost:5000/api/changepassword",
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
              <label className={style.label}> Change Password </label>

              <input
                className={style.input}
                type="ChangePassword"
                name="ChangePassword"
                placeholder="Change Password"
                value={formData.ChangePassword}
                onChange={handleChange}
              />

              <Button name="Send" handleChange={handleSubmit} button={buttonStyle.button}/>

            
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChangePassword;
