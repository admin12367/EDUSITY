import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'


const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobile, setMobile] = useState(false)

  const clickmenu = () => {
    mobile ? setMobile(false) : setMobile(true)
  }

  const clickclear = () => {
     setMobile(false) 
  }



  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobile ? "" : "hide-menu"}>
            <li ><Link onClick={clickclear} to='hero' smooth={true} offset={0} duration={200}>Home</Link></li>
            <li><Link onClick={clickclear} to='program' smooth={true} offset={-260} duration={200}>Program</Link></li>
            <li><Link onClick={clickclear} to='about' smooth={true} offset={-150} duration={200}>About us</Link></li>
            <li><Link onClick={clickclear} to='campus' smooth={true} offset={-240} duration={200}>Campus</Link></li>
            <li><Link onClick={clickclear} to='testimonials' smooth={true} offset={-260} duration={200}>Testimonials</Link></li>
            <li><Link onClick={clickclear} className='btn' to='contact' smooth={true} offset={-230} duration={200}>Contact us</Link></li>
        </ul>
       <img src={menu_icon} alt="" className='menu-icon' onClick={clickmenu}/>
    </nav>
  )
}

export default Navbar