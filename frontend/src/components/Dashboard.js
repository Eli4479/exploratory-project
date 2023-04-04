import React from 'react'
import Card from './Card'

export default function Example({ data }) {
  console.log(data);
  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl text-center items-center m-2 flex align-middle flex-wrap justify-center py-6 sm:px-6 lg:px-8">
            <Card />
          </div>
        </main>
      </div>
    </>
  )
}