import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Dashboard from '../components/Dashboard'
import Buttons from '../components/Buttons'

const Profile = () => {
  return (
    <>
      <Nav />
      <div>
        <Dashboard />
        <Buttons />
      </div>
    </>
  )
}

export default Profile