import React from 'react'
import Footer from "./Footer"

export default function Contact() {
  return (
    <div>
      <div id='container_banner_cantactUs'>
        <h2>Contact Us</h2>

      </div>
      <div id='container_content_contact_us'>
        <div id='left_content_contact_us'>
          <h3>Get in touch</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quaerat?</p>
          <p><i className='bx bx-location-plus' style={{ color: "#f45db4" }}  ></i> 69 North Cleveland Street, Memphis,USA.</p>
          <p><i className='bx bxs-phone-call' style={{ color: "#f45db4" }}></i> (123) 8111 9210 - (012) 1111 6868</p>
          <p><i className='bx bxs-envelope' style={{ color: "#f45db4" }}></i> Florisr@supportthem.com</p>
        </div>
        <div id='center_content_contact_us'>
          <h2>Contact Us</h2>
          <input type="email" style={{ width: "100%", border: "1px solid lightGray", padding: "1rem 2rem" }} placeholder='Email' />
          <input type="text" style={{ width: "100%", height: "5rem", border: "1px solid lightGray", padding: "1rem 2rem" }} placeholder='Message' />
          <button style={{ color: "white", backgroundColor: "black", padding: "1rem 3rem", border: "none" }}>SEND</button>
        </div>
        <div id='right_content_contact_us'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12857.779328557364!2d59.5484251!3d36.3257675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c9211de04adfb%3A0x5720c77a1952b3c7!2sParandeh%20Behesht%20Flowers!5e0!3m2!1sen!2s!4v1724505851857!5m2!1sen!2s" style={{ width: "100%", height: "450", border: "0", allowfullscreen: "", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
