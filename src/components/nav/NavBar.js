//Author: Matt, Purpose: The user has to be logged in the access the links

import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


export const NavBar = ({ clearUser, isAuthenticated }) => {

  const history = useHistory()

  const handleLogout = () => {
    const retVal = window.confirm("Are you sure you want to Logout?")
    
    if(retVal == true){
    history.push('/login');
    clearUser();
    } else {
      return false
    }
  }

  return (
    <nav className="navbar">

      <ul className="nav nav-pills nav-fill">
        {isAuthenticated ?
          <li className="nav-item">
            <Link className="nav-link" to="/">Articles</Link>
          </li>
          : null}
        {isAuthenticated ?
          <li className="nav-item">
            <Link className="nav-link" to="/friends">Friends</Link>
          </li>
          : null}
        {isAuthenticated ?
          <li className="nav-item">
            <Link className="nav-link" to="/messages">Messages</Link>
          </li>
          : null}
        {isAuthenticated ?
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">Tasks</Link>
          </li>
          : null}
        {isAuthenticated ?
          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>
          : null}
        {isAuthenticated ?
          <li className="nav-item" >
            <Link className="nav-link" onClick={handleLogout} to="/login" >Logout</Link>
          </li>
          : null}
      </ul>
    </nav>
  )
}