import { useState } from "react";
import axios from "axios";
import Layout from "../Layout";
import Style from "./styleb.module.css";
import { useEffect } from "react";
import Link from "next/link";
function Booking() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("i amahere")
    const getdata = async () => {
      try {
        axios.get(`http://localhost:5000/api/user/4`).then((res) => {
          console.log(res.data);
          setData(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getdata();
  }, []);
  return (
    <Layout>
      <div className={Style.Booking}>
        <div>
          <h1 className={Style.h1}> Successful Booked </h1>
          <table className={Style.table}>
            <thead>
              <tr className={Style.tr}>
                <th className={Style.th}>book_id</th>
                <th className={Style.th}>seat_booked</th>
                <th className={Style.th}>post_id</th>
                <th className={Style.th}>status</th>
                <th className={Style.th}>user_id</th>
                <th className={Style.th}>Action</th>

              </tr>
            </thead>
            <tbody>
              {data?.map((data, key) => (
                <tr className={Style.tr}>
                  <td className={Style.td}>{data.book_id}</td>
                  <td className={Style.td}>{data.seat_booked}</td>
                  <td className={Style.td}>{data.post_id}</td>

                  <td className={Style.td}>{data.status}</td>
                  <td className={Style.td}>{data.user_id}</td>
                 <Link  href="/Review" >
                 <div className={Style.td}>Review</div>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Booking;
