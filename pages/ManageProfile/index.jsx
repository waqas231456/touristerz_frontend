import { Button } from "@/components";
import Style from "./style.module.css";
import Link from "next/link";
import { useState } from "react";

function ManageProfile() {
  const [formData, setFormData] = useState({
    user_type:"",
    name: "",
    email: "",
    phone: "",
    password: "",
    Comfirm_password: ""
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to save form data here
    try {
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { formData })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setFormData(res.data);
        });
      console.log(formData);
    } catch (error) {
      console.error(error);
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
                  value={formData.user_type}
                  onChange={handleChange}
                >
                  <option value="option1">User</option>
                  <option value="option1">Agency</option>
                  <option value="option1">Service</option>
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
                name="cpassword"
                placeholder="Confirm Password"
                value={formData.confirn_password}
                onChange={handleChange}
              />

              <Button name="Sign Up" handleChange={handleSubmit} />
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
    </>
  );
}

export default ManageProfile;
