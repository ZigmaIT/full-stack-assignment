import React from 'react'
import {BsInstagram,BsTelegram,BsLinkedin,BsFacebook,BsTwitter} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
        <div id='iconWrapper'>
            <BsInstagram/>
            <BsTelegram/>
            <BsLinkedin/>
            <BsFacebook/>
            <BsTwitter/>
        </div>
        <p>Copyright ©2022 All rights reserved</p>
    </footer>
  )
}

export default Footer