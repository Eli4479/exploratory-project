import React from 'react'
import "../components/components_css/button.css"

const Camera = () => {
  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      <div class="w-1/4 h-1/2 bg-blue-gray-300 border border-black rounded-lg border-3"></div>
      <div className='m-10 flex justify-between w-3/4'>
        <button class=" btnn ">
          finish
        </button>
        <button class=" btnn ">
          Take a picture
        </button>
        <button class=" btnn ">
          next
        </button>
      </div>
    </div>
  )
}

export default Camera