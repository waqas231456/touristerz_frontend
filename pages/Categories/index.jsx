import { Button } from "@/components";
import style from "@/styles/Login.module.css";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
function AddCategory() {
  const [formData, setFormData] = useState({
    category: "",
    description: "",
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
        "http://localhost:5000/api/category/create",
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
              <label className={style.label}>Adding Category</label>
              <input
                className={style.input}
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
              />
              <input
                className={style.input}
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
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

export default AddCategory;
