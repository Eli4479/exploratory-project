import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function User() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [RollNumber, setRollNumber] = React.useState("");
  // const [Image, setImage] = React.useState("");
  // iamge upload
  const [Image, setImage] = React.useState(null);
  const add_student = async (e) => {
    toast.loading("Adding user...");
    e.preventDefault();
    if (
      Image.type === "image/jpeg" ||
      Image.type === "image/png" ||
      Image.type === "image/jpg"
    ) {
      let url = "http://localhost:3000/api/admin/course/";
      const course_token = localStorage.getItem("course_id");
      const token1 = course_token.replace(/['"]+/g, "");
      url = url + token1;
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      };

      let bodyContent = new FormData();
      bodyContent.append("name", username);
      bodyContent.append("email", email);
      bodyContent.append("roll_number", RollNumber);
      bodyContent.append("testImage", Image);

      let response = await fetch(url, {
        method: "PUT",
        body: bodyContent,
        headers: headersList,
      });

      let data = await response.text();

      if (response.status === 200) {
        toast.dismiss();
        toast.success("User added successfully");
        window.location.href = "/class_attendance";
      } else {
        // delete above toast of loading and show error
        toast.dismiss();
        toast.error(data);
      }
    } else {
      toast.error("Please upload a valid image file");
      return;
    }
  };
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Add a user
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="roll"
                className="block text-sm font-semibold text-gray-800"
              >
                UserName
              </label>
              <input
                type="string"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
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
            <div className="mb-2">
              <label
                for="photo"
                className="block text-sm font-semibold text-gray-800"
              >
                Photo
              </label>
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              ></input>
            </div>
            <div className="mt-6 flex justify-center text-center">
              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
                onClick={add_student}
              >
                Add student
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
      <Toaster position="bottom-right" />
    </>
  );
}
