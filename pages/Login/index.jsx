import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const res = await axios.post("http://localhost:5000/api/login", formData);
      console.log("data :", res.data);
      console.log("data :", res.data.user_id);

      
        localStorage.setItem("roles_id", res?.data?.roles_id);
        localStorage.setItem("status", res?.data?.status);
        localStorage.setItem("user_id", res?.data?.user_id);
        const role = localStorage.getItem("roles_id");
        const status = localStorage.getItem("status");
        console.log("role :", role);

        if (role == 1) {
          if (status == "Active") {
            alert("Active Role 1");
          } else {
            alert("Active Role 1 is not Approved");
          }
        } else if (role == 2) {
          if (status == "Active") {
            alert("Active Role 2");
          } else {
            alert("Active Role 2 is not Approved");
          }
        } 
     

      // localStorage.setItem("user_id", res?.data?.user_id);
      // const id = localStorage.getItem("user_id");
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
              <label className={style.label}>Sign In</label>
              <input
                className={style.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <Button name="sign in" handleChange={handleSubmit} />
              <p className={style.text}>
                <Link href="/ForgotPassword" style={{ color: "#FFA17A" }}>
                  Forgort Password
                </Link>
              </p>
              <p className={style.p}>
                Already have account ?{" "}
                <Link href="/SignUp" style={{ color: "#FFA17A" }}>
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
