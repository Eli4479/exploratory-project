import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

const Card = () => {
  const [data, setData] = useState([]);
  const onLoading = () => {
    if (localStorage.getItem('token') === null) {
      window.location.href = '/login'
    }
    else {
      const token = localStorage.getItem('token');
      const token1 = token.replace(/['"]+/g, '');
      const data = async () => {
        let headersList = {
          "Accept": "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)"
        }

        let response = await fetch(`http://localhost:3000/api/admin/${token1}`, {
          method: "GET",
          headers: headersList
        });

        let datas = await response.text();
        let data = JSON.parse(datas);
        setData(data)
      }
      data()
    }
  }
  useEffect(() => {
    onLoading()
  }, [])
  return (
    <>
      {
        data.size === 0 ? <h1>Loading</h1> : data.map((d) => {
          return (
            <Link to={`/class_attendance`} key={d._id} class="block text-center m-4 w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow ease-in duration-100 hover:bg-gray-100"
              onClick={() => { localStorage.setItem('course_id', d._id) }}>
              <h5 class="mb-2 text-4xl mx-3 font-bold tracking-tight  text-gray-900 dark:text-white">{d.course_code + " : " + d.course_name}</h5>
            </Link>
          )
        }
        )
      }
    </>
  )
}

export default Card