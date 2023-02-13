import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import buttonStyle from '@/styles/Button.module.css'

import { signIn } from "@/store/authSlice";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(formData);
  // };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(signIn({ email, password }));

    // try {
    //   const res = await axios.post("http://localhost:5000/api/login", formData);
    //   console.log("data is :", res.data.userData, "token is ", res.data.token);
    //   console.log("data :", res.data.userData.user_id);

    //     localStorage.setItem("roles_id", res.data.userData.roles_id);
    //     localStorage.setItem("status", res.data.userData.status);
    //     localStorage.setItem("token",res.data.token);
    //     const role = localStorage.getItem("roles_id");
    //     const status = localStorage.getItem("status");
    //     console.log("role :", role);

    //     if (role == 1) {
    //       if (status == "Active") {
    //         alert("Active Role 1");
    //       } else {
    //         alert("Active Role 1 is not Approved");
    //       }
    //     } else if (role == 2) {
    //       if (status == "Active") {
    //         alert("Active Role 2");
    //       } else {
    //         alert("Active Role 2 is not Approved");
    //       }
    //     }

    //   // localStorage.setItem("user_id", res?.data?.user_id);
    //   // const id = localStorage.getItem("user_id");
    // } catch (err) {
    //   console.log(err);
    // }
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={style.input}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link href="/Dashboard" legacyBehavior>
                <Button name="sign in" handleChange={handleSubmit}  button={buttonStyle.button}/>
              </Link>

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
