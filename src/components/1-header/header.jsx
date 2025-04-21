import React, { useEffect, useState } from 'react'
import './header.css'
import { IoMdMenu } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

export default function Header() {
  const [click, setclick] = useState(false)

  // handle dark and light mode
  const [mode, setMode] = useState("k")
  useEffect(() => {
    if (JSON.stringify(localStorage.mode)) {
      setMode(localStorage.mode)
    } else {
      setMode("dark")
    }
  }, [])


  useEffect(() => {
    document.body.classList.add(mode)
  }, [mode])
  const changeMode = () => {
    document.body.classList.remove(mode)
    if (mode === "dark") {
      localStorage.setItem("mode", "light")
      setMode("light")

    }
    else {
      localStorage.setItem("mode", "dark")
      setMode("dark")
    }
  }
  return (
    <header className='flex'>

      <button onClick={() => setclick(true)} className='menu' >
        <IoMdMenu />
      </button>
      <div />
      {click && <div className='fixed'>
        <ul className='modal'>
          <li>
            <button className='icon-clear' onClick={() => setclick(false)}><MdOutlineClose /></button>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#main">Articles</a></li>
          <li><a href="#main">Projects</a></li>
          <li><a href="#contact">Speaking</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>}
      <nav>
        <ul className='flex '>
          <li><a href="#about">About</a></li>
          <li><a href="#main">Articles</a></li>
          <li><a href="#main">Projects</a></li>
          <li><a href="#contact">Speaking</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button onClick={changeMode} className='icon-moon'>
        {mode === "dark" ? <FaRegMoon /> : <FiSun />}

      </button>
    </header>
  )
}
