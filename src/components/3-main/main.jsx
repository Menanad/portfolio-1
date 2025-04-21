import React, { useState } from 'react'
import './main.css'
import Cart from './cart/Cart'
import { MyProjects } from './dataProjects/data'
export default function Main() {

  const [active, setactive] = useState('all')
  function filterData(e) {
    setactive(e.target.name)
  }
  // ========= alert ==============
  // when you write a description write as two lines

  const myProjects = MyProjects
  const finallyData = active != 'all' ? myProjects.filter(
    (item) => {
      const array2 = item.category.filter(
        (item2) => {
          return item2 == active
        })
      console.log(array2)
      return array2[0] == active
    }) : myProjects
  const showData = finallyData.map((item, index) => {
    return (
      <Cart
        key={index}
        title={item.title}
        description={item.description}
        image={item.image}
        linkDemo={item.linkDemo}
        linkGitHup={item.linkGitHup}
        linkMore={item.linkMore}
      />
    )
  })
  return (
    <main id='main' className='flex '>
      <section className='left  '>
        <button onClick={(e) => filterData(e)} name='all' className={`btn ${active == "all" ? "active" : null}`}>All Projects</button>
        <button onClick={(e) => filterData(e)} name='html' className={`btn ${active == "html" ? "active" : null}`}>HTML & CSS</button>
        <button onClick={(e) => filterData(e)} name='javascript' className={`btn ${active == "javascript" ? "active" : null}`}>JavaScript</button>
        <button onClick={(e) => filterData(e)} name='react' className={`btn ${active == "react" ? "active" : null}`}>React & CSS Frameworks</button>
      </section>
      <section className='right flex '>
          {showData}
      </section>
    </main>
  )
}
