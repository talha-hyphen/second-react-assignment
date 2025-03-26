import React from 'react'

export default function Navbar(props) {
  return (
    <div> 
        <li className="navbar-item">
    <button className="navbar-link  active" data-nav-link>{props.navlink}</button>
  </li>

  </div>
  )
}
