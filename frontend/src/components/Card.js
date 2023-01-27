import React from 'react'

const Card = () => {
  return (

    <a href="#" class="block m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ease-in duration-100 hover:bg-gray-100">
      <h5 class="mb-2 text-4xl mx-3 font-bold tracking-tight  text-gray-900 dark:text-white">Course Name</h5>
      <ul className='text-center'>
        <li class="font-normal text-xl text-gray-700 dark:text-gray-400 my-3 mx-4">lab-Attendance:</li>
        <li class="font-normal text-xl text-gray-700 dark:text-gray-400 my-3 mx-4">tut-Attendance:</li>
        <li class="font-normal text-xl text-gray-700 dark:text-gray-400 my-3 mx-4">class-Attendance:</li>
        <li class="font-normal text-xl text-gray-700 dark:text-gray-400 my-3 mx-4">total-Attendance:</li>
      </ul>
    </a>
  )
}

export default Card