import { Button } from "@/components";
import Style from "./style.module.css";
import buttonStyle from '@/styles/Button.module.css'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function ManageProfile() {
  const [file, setFile] = useState(null);
  const [hasFile, setHasFile] = useState(false);
  const profileImage = useRef();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    user_type: "",
    name: "",
    email: "",
    phone: "",
    cnic: "",
    city: "",
    status: "",
  });

  useEffect(() => {
    // console.log("i amahere")
    const getdata = async () => {
      try {
        axios.get(`http://localhost:5000/api/user/1`).then((res) => {
          console.log(res.data.userData);
          setData(res.data.userData);
          console.log(data.name); 
        });
      } catch (error) {
        console.log(error);
      }
    };
    

    getdata();
  }, [ ]);

  

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setHasFile(true);
        setFile(file);
        console.log(setFile);
        profileImage.current.src = URL.createObjectURL(file);
        console.log(URL.createObjectURL(file));
      } else {
        setHasFile(false);
      }
    };

    const handleSelect = (role) => {
      console.log(role);
      setFormData({ ...formData, roles_id: role });
    };

    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
      console.log(formData);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
     
      
  
      try {
        axios
          .put(`http://localhost:5000/api/user/1`, { formData })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            setFormData(res.data);
          });
        console.log(formData);
      } catch (error) {
        console.error(error);
        //   }
      }
    }

    // http://localhost:5000/api/user/1
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // Add logic to save form data here
    //   try {
    //     axios
    //       .post(`https://jsonplaceholder.typicode.com/users`, { formData })
    //       .then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //         setFormData(res.data);
    //       });
    //     console.log(formData);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    return (
      <>
        <div className={Style.log}>
          <div className={Style.main}>
            <div className={Style.signup}>
              <form>
                <label className={Style.label}>Manage Profile</label>

                <div className={Style.profile}>
                  <img
                    ref={profileImage}
                    src=""
                    alt="Profile"
                    style={{
                      borderRadius: "25%",
                      height: "150px",
                      width: "150px",
                    }}
                  />
                  <br />
                  <input
                    multiple={false}
                    onChange={handleImageChange}
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    style={{ height: "80px", width: 80 % "" }}
                  />

                  <div className={Style.drop}>
                  <input
                  className={Style.select}
                  type="text"
                  name="name"
                  placeholder="name"
                  value={data.roles_id}
                  onChange={handleChange}
                />
                  </div>
                </div>

                <input
                  className={Style.input}
                  type="text"
                  name="name"
                  placeholder="name"
                  value={data.name}
                  onChange={handleChange}
                />
                <input
                  className={Style.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                />
                <input
                  className={Style.input}
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={data.phone}
                  onChange={handleChange}
                />

                <input
                  className={Style.input}
                  type="number"
                  name="cnic"
                  placeholder="CNIC"
                  value={data.cnic}
                  onChange={handleChange}
                />

                <input
                  className={Style.input}
                  type="text"
                  name="city"
                  placeholder="City"
                  value={data.city}
                  onChange={handleChange}
                />

                <input
                  className={Style.input}
                  type="text"
                  name="status"
                  placeholder="Status"
                  value={data.status}
                  onChange={handleChange}
                />

                <Button
                  name="Update User"
                  handleChange={handleSubmit}
                  // style={{ width: "30%" }}
                  button={buttonStyle.button}
                />
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };



export default ManageProfile;
