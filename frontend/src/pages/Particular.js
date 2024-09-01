import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../components/components_css/button.css";
import toast, { Toaster } from "react-hot-toast";

export default function Particular() {
  const [RollNumber, setRollNumber] = React.useState("");
  const [User, setUser] = React.useState("");
  const find_att = async (e) => {
    toast.loading("finding user...");
    e.preventDefault();
    const token = localStorage.getItem("course_id");
    const token1 = token.replace(/['"]+/g, "");
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      roll_number: RollNumber,
    });

    console.log(token1);
    let response = await fetch(
      "https://explo-backend.onrender.com/api/admin/course/user/" + token1,
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.text();
    console.log(data);
    if (response.status === 200) {
      toast.dismiss();
      toast.success("Fetch Successfully");
      // convert string to json
      data = JSON.parse(data);
      setUser(data);
    } else {
      toast.dismiss();
      toast.error(data);
    }
  };
  return (
    <>
      {User ? (
        //  show user details
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
              Given User Details
            </h1>
            <div className="flex flex-col items-center justify-center w-full space-y-6">
              <span className="text-2xl font-semibold text-center text-purple-700 mt-8">
                Roll Number: {User.roll_number}
              </span>
              <span className="text-2xl font-semibold text-center text-purple-700">
                Name: {User.username}
              </span>
              <span className="text-2xl font-semibold text-center text-purple-700">
                Present: {User.present}
              </span>
              {
                <span className="text-2xl font-semibold text-center text-purple-700">
                  Absent:{User.total_classes - User.present}
                </span>
              }
              <span className="text-2xl font-semibold text-center text-purple-700">
                total Attendance:{User.total_classes}
              </span>
              {User.present === User.total_classes ? (
                <span className="text-2xl font-semibold text-center text-green-700">
                  Attendance: 100%
                </span>
              ) : ((User.present / User.total_classes) * 100).toFixed(2) <
                75 ? (
                <span className="text-2xl font-semibold text-center text-red-700">
                  Attendance:{" "}
                  {((User.present / User.total_classes) * 100).toFixed(2)}%
                </span>
              ) : (
                <span className="text-2xl font-semibold text-center text-green-700">
                  Attendance:{" "}
                  {((User.present / User.total_classes) * 100).toFixed(2)}%
                </span>
              )}
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.reload();
                }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
          <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
              See Student's Attendance
            </h1>
            <form className="mt-6">
              <div className="mb-2">
                <label
                  for="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  RollNumber
                </label>
                <input
                  type="password"
                  onChange={(e) => {
                    setRollNumber(e.target.value);
                  }}
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mt-6 flex justify-center text-center">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  onClick={find_att}
                >
                  See Attendance
                </button>
              </div>
              <div className="mt-6 flex justify-center text-center">
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/class_attendance";
                  }}
                >
                  Back
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Toaster position="bottom-right" />
    </>
  );
}
