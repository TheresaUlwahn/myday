import React from 'react'
import { Link, Navbar } from 'react-router-dom' 
// import Navbar from '@ovie/react-navbar'
import './navigationbar.css'

const navTheme  = {
  mainColor: 'darkslategrey',
  menuBgColor: 'darkslategrey'
}

const navBrand = <a className="brand" href="#null"><p>My Day</p></a> 

const leftLinks = (
  <>
    {/* <a href="/newReflection/">New Day</a>
    <a href="#null">Your Reflections</a> */}
  </>
)

const handleLogOut = () => {
  console.log("Hej!")
  window.localStorage.removeItem("accessToken")
  window.localStorage.removeItem("userId")
}

const rightLinks = (
  <>
    <Link to={`/newReflection/`}>
      <a href="/newReflection/">New Day</a>
    </Link>
    <a onClick={handleLogOut} href="/">Log Out</a>
  </>
)



export const NavigationBar = () => {
    return (
      <div className="navMenu">
        <Navbar
          brand={navBrand}
          theme={navTheme}
          leftLinks={leftLinks}
          rightLinks={rightLinks}
          shouldAnimate={true}
        />
      </div>
    
    )
  }
  