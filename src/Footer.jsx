import React from 'react'
import { BrowserRouter, Routes, Route,Link} from 'react-router-dom';
import '../src/App.css'
import '../src/index.css'
const Footer = () => {
  return (

<>
    <div className='footer' >
  <p> &copy;2025 | 
    <a href="https://mahmoud-ali-1pxx.vercel.app/" target="_blank" rel="noopener noreferrer">    Al-Mansouri     </a>
    | All rights reserved regarding the Terms of Use, Privacy Policy and Cookies</p>
    </div>
</>
  )
}

export default Footer