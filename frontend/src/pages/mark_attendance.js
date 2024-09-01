import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "../components/components_css/button.css";

export default function Mark_attendance() {
  const [RollNumber, setRollNumber] = React.useState("");

  const mark_attendance = async (e) => {
    const course_token = localStorage.getItem("course_id");
    const token1 = course_token.replace(/['"]+/g, "");
    toast.loading("Marking attendance...");
    e.preventDefault();
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
      "http://localhost:3000/api/admin/course/user/" + token1,
      {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.text();
    console.log(data);
    if (response.status === 200) {
      toast.dismiss();
      toast.success("Attendance marked successfully");
      window.location.href = "/class_attendance";
    } else {
      // delete above toast of loading and show error
      toast.dismiss();
      toast.error(data);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Mark student attendance
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="number"
              className="block text-sm font-semibold text-gray-800"
            >
              Roll Number
            </label>
            <input
              type="number"
              onChange={(e) => setRollNumber(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6 flex justify-center text-center">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={mark_attendance}
            >
              Mark student attendance
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
      <Toaster position="bottom-right" />
    </div>
  );
}
