import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/White-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a4744bf8-bdcc-4945-af53-94dc8e8ed84f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor neque animi assumenda ipsam tempora in perferendis corporis, temporibus corrupti obcaecati tenetur maxime repellendus, reprehenderit eius distinctio ratione! Earum, quisquam iusto!</p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@greatstack.dev</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77 massachustes ave, cambridge <br /> ma 02139, united states</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required/>
            <label>Write your message here</label>
            <textarea type="text" name='message' rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
           
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
