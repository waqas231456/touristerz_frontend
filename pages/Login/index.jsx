import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import buttonStyle from "@/styles/Button.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const cookies = new Cookies()

  const router = useRouter()

  const handleChange = async (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };
  const handleSubmit = async (event) => {
  try {
    const res = await axios.post("http://localhost:5000/api/login", formData);
    console.log("data :", res.data.userData);
    
    console.log("data is :", res.data.userData, "token is " ,res.data.token);
    console.log("data :",res.data.userData);

    cookies.set("user", JSON.stringify(res.data.userData));
    let data = cookies.get('user')
    if (data?.roles_id == 1) {
      router.push('/Dashboard')
    } else if (data?.roles_id == 2) {
      router.push('/ServiceDashboard')
    }else if (formData.email == 'amdin@gmail.com' && password == '123456'){
      router.push('/ManageUsers')
    }
  } catch (err) {
    console.log(err);
  }
}

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
            <Link href="">
              <Button
                name="sign in"
                handleChange={handleSubmit}
                button={buttonStyle.button}
              />
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
);}

export default Login;
