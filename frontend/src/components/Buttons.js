import "./components_css/button.css"
import { Link } from "react-router-dom";
import React from "react";

export default function Buttons() {
  const [showModal, setShowModal] = React.useState(false);
  const [Course_code, setCourse_code] = React.useState("");
  const [Course_name, setCourse_name] = React.useState("");
  const set_course = async () => {
    const token = localStorage.getItem("token");
    const token1 = token.slice(1, token.length - 1);
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json"
    }

    let bodyContent = JSON.stringify({
      "course_code": Course_code,
      "course_name": Course_name
    });

    let response = await fetch(`http://localhost:3000/api/admin/${token1}`, {
      method: "PUT",
      body: bodyContent,
      headers: headersList
    });

    let data = await response.text();
    console.log(data);
    setShowModal(false);
    window.location.reload();
  }
  return (
    <div className="flex w-full justify-evenly ">
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Add New Course Details
                    </h3>
                  </div>
                  <form className="mt-6">
                    <div className="mb-2">
                      <label
                        for="Course_code"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Course Code
                      </label>
                      <input
                        type="text"
                        onChange={(e) => { setCourse_code(e.target.value) }}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="mb-2">
                      <label
                        for="password"
                        className="block text-sm font-semibold text-gray-800"
                      >
                        Course Name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => { setCourse_name(e.target.value); }}
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className=" btnn"
                        type="button"
                        onClick={set_course}
                      >
                        Add Course
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <button className="btnn" onClick={() => setShowModal(true)}>add a course</button>
      </>
    </div>
  );
}

