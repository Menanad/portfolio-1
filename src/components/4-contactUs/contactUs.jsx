import React, { useState } from 'react'
import './contactUs.css'
import { FaEnvelope } from "react-icons/fa";

import Lottie from "lottie-react";
import Done from '../../animations/done.json'
import EmailSend from '../../animations/emailSend.json'

export default function ContactUs() {
  const [load, setLoad] = useState(false)
  const [loadtrue, setLoadtrue] = useState(false)
  const [disable, setdisable] = useState(false)
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true)
    setdisable(true)
    try {
      const response = await fetch('https://formsubmit.co/menanady7049@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: message,
          _subject: "New Form Submission!",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail('');
        setMessage('');
      } else {
        setError('Failed to send. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoad(false)
      setLoadtrue(true)
      setdisable(false)
      handleTimeout()
    }
  };

  // function time out 
  const handleTimeout = () => {
    setTimeout(() => {
      setLoadtrue(false)
    }, 4000)
  }

  return (
    <section id='contact' className=' contact-us '>
      <div className='title'>
        <div className='icon-contact-us'>
          <FaEnvelope />
        </div>
        <div>Contact us</div>
      </div>
      <p>Contact us for more information and Get notified when i publish something new.</p>
      <div style={{justifyContent:'space-between'}} className="flex">
        <form onSubmit={handleSubmit} className='flex' >
          <div className='flex'>
            <label htmlFor="email">Email Address:</label>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Email Adress' required id='email' type="email" />
          </div>
          <div className='flex' style={{ marginTop: '24px' }}>
            <label htmlFor="message">Your Message:</label>
            <textarea value={message}
              onChange={(e) => setMessage(e.target.value)} name='message' placeholder='Message' required id='message' />
          </div>
          <button disabled={disable} style={{ cursor: disable && 'not-allowed' }} type='submit' className='submit' >
            Submit
          </button>
          <div style={{ marginTop: '0.5rem' }}>
            {load && <i className='loader'></i>}
            {loadtrue &&
              <div className='flex' style={{flexDirection:'row',alignItems:'center'}}>
                <span style={{fontSize:'15px',color:`var(--title)`}}>
                  Your message has been successfully  
                </span>
                <i   style={{ display: 'inline-block', width: '50px' }}>
                  <Lottie loop={false} animationData={Done} />
                </i>
              </div>}
          </div>

        </form >
        <div className=" animation">
          <Lottie style={{height:355}} animationData={EmailSend}/>
        </div>
      </div>
    </section>
  )
}
