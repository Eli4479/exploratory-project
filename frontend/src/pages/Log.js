import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Log() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const login = async (e) => {
    e.preventDefault();
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      email: email,
      password: password,
    });
    console.log(bodyContent);

    let response = await fetch(
      "https://explo-backend.onrender.com/api/login/admin",
      {
        method: "POST",
        body: bodyContent,
        headers: headersList,
      }
    );

    let data = await response.text();
    if (response.status === 200) {
      toast.dismiss();
      toast.success("Login Successful");
      localStorage.clear();
      localStorage.setItem("token", data);
      window.location.href = "/profile";
    } else {
      toast.dismiss();
      toast.error(data);
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6">
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
              Password
            </label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6 flex justify-center text-center">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={login}
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
          <a href="/" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
