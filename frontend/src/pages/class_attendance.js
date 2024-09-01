import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/components_css/button.css";

export default function Class_attendance() {
  const [User, setUser] = React.useState([]);
  const get_all_user = async () => {
    const course_token = localStorage.getItem("course_id");
    const token1 = course_token.replace(/['"]+/g, "");
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };
    let response = await fetch(
      `http://localhost:3000/api/admin/course/users/${token1}`,
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.text();
    let data1 = JSON.parse(data);
    setUser(data1);
    // console.log(data1);
    console.log(typeof data1);
    console.log(User);
  };
  React.useEffect(() => {
    get_all_user();
  }, []);
  const add_a_class = async () => {
    const course_token = localStorage.getItem("course_id");
    const token1 = course_token.replace(/['"]+/g, "");
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    };

    let bodyContent = new FormData();

    let response = await fetch(
      `http://localhost:3000/api/admin/course/${token1}`,
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.text();
    window.location.reload();
  };
  return (
    <>
      <div className="flex justify-center">
        <div style={{ margin: "50px" }}>
          <h1 style={{ fontSize: "35px" }}>Attendance of all the students</h1>
        </div>
      </div>
      <div className="flex flex-col m-10">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle justify-center content-center h-full">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Roll Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Present
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                    >
                      precentage present
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {User.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center">
                        No Users
                      </td>
                    </tr>
                  ) : (
                    User.map((u) => {
                      let percent = (u.present / u.total_classes) * 100;
                      isNaN(percent) ? (percent = 0) : (percent = percent);
                      percent = percent.toFixed(2);
                      return (
                        <tr key={u._id}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {u.roll_number}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {u.username}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {u.present} of {u.total_classes} classes
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                            {/* <span className="text-green-500 hover:text-green-700">
                                {percent}%
                              </span> */}
                            {/* if percent is less than 75% then show it with red color */}
                            {percent < 75 ? (
                              <span className="text-red-500 hover:text-red-700">
                                {percent}%
                              </span>
                            ) : (
                              <span className="text-green-500 hover:text-green-700">
                                {percent}%
                              </span>
                            )}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly w-full">
          <a href="/profile">
            <button className="btnn">Back</button>
          </a>
          <button className="btnn" onClick={add_a_class}>
            register a class
          </button>
          <a href="/user">
            <button className="btnn">Add A User</button>
          </a>
          <a href="mark_attendance">
            <button className="btnn">Mark Course Attendance</button>
          </a>
          <a href="/Particular">
            <button className="btnn">See Particular Student Attendance</button>
          </a>
        </div>
      </div>
    </>
  );
}
