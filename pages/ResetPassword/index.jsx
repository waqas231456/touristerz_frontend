import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";

function ResetPassword() {
  

  const [formData, setFormData] = useState({
    password: '',
    confirm_password: ''
  });

  

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
     
    });
    console.log(formData)
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
    <>
      <div className={style.log}>
        <div className={style.box}>
          <div className={style.signin}>
            <form>
              <label className={style.label}> Password Reset </label>
             
              <input
                className={style.input}
                type="password"
                name="Password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="password"
                name="Confirm_Password"
                placeholder="Confirm_Password"
                value={formData.confirm_password}
                onChange={handleChange}
              />
              <Button name="Submit" handleChange={handleSubmit} />
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
