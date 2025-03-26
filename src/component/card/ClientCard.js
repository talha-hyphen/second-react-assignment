import React from 'react'

export default function ClientCard(props) {
  return (
    <li className="clients-item">
    <a href="#">
      <img src={props.image} alt="client logo"/>
    </a>
  </li>
  )
}
