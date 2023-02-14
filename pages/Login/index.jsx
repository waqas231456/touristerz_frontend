import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import buttonStyle from "@/styles/Button.module.css";
import axios from "axios";
import { useRouter } from "next/router";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

    localStorage.setItem("user", JSON.stringify(res.data.userData));
    let data = JSON.parse(localStorage.getItem('user'))
    const role = localStorage.getItem("roles_id");
    const status = localStorage.getItem("status");
    console.log("role :", role);

    if (data?.roles_id == 1) {
        router.push('/ManageProfile')
    } else if (data?.roles_id == 2) {
        router.push('/Dashboard')
    }else if (data?.roles_id == 3){
      router.push('/ServiceDashboard')
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
