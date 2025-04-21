import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <footer className='flex'>
      <ul className='flex'>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#main">Projects</a>
        </li>
        <li>
          <a href="#contact">Speaking</a>
        </li>
        <li>
          <a href="#up">Users</a>
        </li>
      </ul>
      <p>© 2025 Mena Slash . All rights reserved</p>
    </footer>
  )
}
