import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <h4>Page Not Found</h4>
      <Link to="/">Click here to go back home</Link>
    </div>
  )
}

export default NotFound