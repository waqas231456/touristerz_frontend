import { Button } from "@/components";
import Style from "./style.module.css";
import buttonStyle from '@/styles/Button.module.css'
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

function ManageProfile() {
  const [file, setFile] = useState(null);
  const [hasFile, setHasFile] = useState(false);
  const serviceImage = useRef();
  const [data, setData] = useState({});
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    post_type: 'services',
    location: '',
    price: '',
    image_url: ''
  });
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHasFile(true);
      setFile(file);
      console.log(setFile);
      serviceImage.current.src = URL.createObjectURL(file);
      let imageUrl = serviceImage.current.src
      console.log(URL.createObjectURL(file));
      setFormData({ ...formData, image_url: imageUrl })
    } else {
      setHasFile(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axios
        .post(`http://localhost:3000/api/posts/${1}/${1}`, { formData })
        .then((res) => {
          setFormData(res.data);
          console.log(res)
        });
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div className={Style.log}>
        <div className={Style.main}>
          <div className={Style.signup}>
            <form>
              <label className={Style.label}>Add Service</label>
              <div className={Style.profile}>
                <img
                  ref={serviceImage}
                  src=""
                  alt="Service Image"
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
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <input
                  className={Style.input}
                  type="text"
                  name="name"
                  placeholder="name"
                  value={formData.title}
                  onChange={(e)=>setFormData({...formData, title:e.target.value})}
                />

                <input
                  className={Style.input}
                  type="text"
                  name="name"
                  placeholder="Description"
                  value={formData.description}
                  onChange={(e)=>setFormData({...formData, description:e.target.value})}
                />
                <input
                  className={Style.input}
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e)=>setFormData({...formData, location:e.target.value})}
                />
                <input
                  className={Style.input}
                  type="number"
                  name="phone"
                  placeholder="Price"
                  value={formData.price}
                  onChange={(e)=>setFormData({...formData, price:e.target.value})}
                />
              </div>
              <Button
                name="Post Service"
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
