import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div>
      <h2>Website help </h2>
      <p>Get in-touch with us today</p>
      <nav>
        <NavLink to="faq">View The FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default HelpLayout