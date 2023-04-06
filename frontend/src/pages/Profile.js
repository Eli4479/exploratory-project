import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Dashboard from '../components/Dashboard'
import Buttons from '../components/Buttons'

const Profile = () => {
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.href = '/login'
    }
    localStorage.removeItem('course_id')
  }, [])
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