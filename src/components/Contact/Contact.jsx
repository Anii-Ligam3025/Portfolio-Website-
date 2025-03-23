import React from 'react'
import "./Contact.css"
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/call_icon.jpg";
import location_icon from "../../assets/location_icon.webp";
const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d28ce9d3-e21d-4f6a-bb8a-968a94ff3420");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     alert(res.message)
    }
  };

  return (
    <div className="contact" id='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <div className="contact-details">

          
            <div className="contact-detail">
                <img src={mail_icon} alt="" height="50px" /> <p>aniketligam66@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={phone_icon} alt="" height="40px" /> <p>+91 00000000-9</p>
            </div>
            <div className="contact-detail">
                <img src={location_icon} alt="" height="50px"  /><p>Mumbai,India</p>
            </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor=''>Your Name</label>
        <input type='text' placeholder='Enter your name' name='name'/>
        <label htmlFor=''>Your Email</label>
        <input type='email' placeholder='Enter your  email' name='email'/>
        <label htmlFor=''>Write your message here</label>
        <textarea name='message' rows="8" placeholder='Enter yout message'></textarea>
        <button type="submit" className="contact-submit">Submit now</button>
      </form>
    </div>
      </div>
     
  )
}

export default Contact

