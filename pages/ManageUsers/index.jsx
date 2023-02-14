
import axios from "axios";
import Layout from "@/components/Layout";
import Style from "./stylep.module.css";
import { useEffect , useState } from "react";
function ManageUser() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log("i amahere")
    const getdata = async () => {
      try {
        axios.get(`http://localhost:5000/api/allusers`).then((res) => {
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
      <div className={Style.Pending}>
        <div>
          <h1 className={Style.h1}>Manage Users</h1>
          <table className={Style.table}>
            <thead>
              <tr className={Style.tr}>
                <th className={Style.th}>user_id</th>
                <th className={Style.th}>name</th>
                <th className={Style.th}>email</th>
                <th className={Style.th}>status</th>
               

              </tr>
            </thead>
            <tbody>
              {data?.map((data, key) => (
                <tr className={Style.tr}>
                  <td className={Style.td}>{data.user_id}</td>
                  <td className={Style.td}>{data.name}</td>
                  <td className={Style.td}>{data.email}</td>
                  <td className={Style.td}>{data.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </Layout>
  );
}

export default ManageUser;
