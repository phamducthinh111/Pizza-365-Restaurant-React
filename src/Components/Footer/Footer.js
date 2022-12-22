import React from 'react'
import { FaArrowUp, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaSnapchat, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='text-center bg-warning mt-3 py-5'>
      <h4> Footer</h4>
      <a className='btn btn-dark mt-3' href='header'> <FaArrowUp/> To the top </a>
      <div className='mt-3'>
        <FaFacebook/>&nbsp;
        <FaInstagram/>&nbsp;
        <FaSnapchat/>&nbsp;
        <FaPinterest/>&nbsp;
        <FaTwitter/>&nbsp;
        <FaLinkedin/>
      </div>
    </div>
  )
}
