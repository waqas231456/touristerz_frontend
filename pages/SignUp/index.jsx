import { Button } from "@/components";
import Style from "./style.module.css";
import buttonStyle from '@/styles/Button.module.css'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function Signup() {
  const [formData, setFormData] = useState({
    roles_id: "",
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const handleSelect = (role) => {
    console.log(role);
    setFormData({ ...formData, roles_id: role });
  };
  

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log("data", formData);
  };

  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const {data} = await axios.post(
        "http://localhost:5000/api/sign-up",
        formData
      );
      setFormData(formData)
      if(formData){
        router.push('/Login')
      }
      console.log("data :", res.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  return (
    <>
      <div className={Style.log}>
        <div className={Style.main}>
          <div className={Style.signup}>
            <form>
              <label className={Style.label}>Sign up</label>

              <div className={Style.drop}>
                <select
                  className={Style.select}
                  placeholder="Select User Type"
                  onChange={(e) => handleSelect(e.target.value)}
                >
                  <option value="1" defaultChecked>User</option>
                  <option value="2">Service</option>
                </select>
              </div>

              <input
                className={Style.input}
                type="text"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className={Style.input}
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className={Style.input}
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className={Style.input}
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                className={Style.input}
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                value={formData.confirm_password}
                onChange={handleChange}
              />

              <Button name="Sign Up" handleChange={handleSubmit} button={buttonStyle.button}/>
              <p className={Style.p}>
                Already have account ?{" "}
                <Link style={{ color: "#FFA17A" }} href="/Login">
                  Login
                </Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* <h1>{authState ? 'loggedIn':'logged Out'}</h1>
      <button onClick={handleSelect1}>Change State</button> */}
    </>
  );
}

export default Signup;
