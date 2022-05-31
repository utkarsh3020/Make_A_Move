import React from 'react'

function ContactUs() {
  return (
    <div className='contact-form'>
      <div className='form'>
        <h1 className='form-heading'>Contact Us</h1>
        <form action="" className='inner-form'>
          <div>
            <input className='input' type="text" placeholder='Your Name' />
          </div>
          <div>
            <input className='input' type="text" placeholder='Your Email' />
          </div>
          <div>
            <textarea className='textarea' name="message" id="" cols="40" rows="5" placeholder='Your Message'></textarea>
          </div>
          <div>
            <button className='form-btn'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs