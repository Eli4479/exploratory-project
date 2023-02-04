import React from 'react'
import "../components/components_css/button.css"
import { Link } from "react-router-dom";

const student_attendance = () => {
  return (
    <>
      <div class="flex flex-col items-center h-screen w-screen justify-center">
        <div class="bg-gray-100 shadow-xl w-[30%] flex flex-col justify-center items-center h-[60%] rounded-lg py-3">
          <div class="photo-wrapper p-2  mt-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe" />
          </div>
          <div class="w-full h-screen text-center flex justify-center align-middle flex-col ">
            <h3 class="text-center text-4xl text-gray-900 font-medium leading-8">Name</h3>
            <div class="text-center text-gray-400 text-3xl mt-4 font-semibold">
              <p>Roll_number</p>
            </div>
            <div className="mt-2">
              <h1 style={{ margin: '10px' }} className="text-xl">Course Code: EE231</h1>
              <h1 style={{ margin: '10px' }} className="text-xl">Total Present : 35</h1>
              <h1 style={{ margin: '10px' }} className="text-xl">Total Absent : 5</h1>
              <h1 style={{ margin: '10px' }} className="text-xl">Attendance : 87.5%</h1>
            </div>
          </div>
        </div>
        <div className='w-screen flex justify-evenly m-2'>
          <Link to={'/profile'}>
            <button class=" btnn">
              Back
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default student_attendance

