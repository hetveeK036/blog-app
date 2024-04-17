import React from 'react'
import LOGO from "../asset/logo.png"

const Footer = () => {
  return (
    <>
     <footer>
       <img src={LOGO} alt="" />
       <span>
        Made With ❤️ <b>React.js</b>
       </span>
     </footer>
    </>
  )
}

export default Footer