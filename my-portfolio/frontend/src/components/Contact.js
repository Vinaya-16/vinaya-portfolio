import React, { useState } from "react";
import Email from '../assets/communication.png';
import GitHub from '../assets/gitlogo.png';
import Phone from '../assets/phone.png';
import avail from '../assets/career.png';

function Contact() {

  const src = [
    { id: 1, name: "Email", link: "vinayapatole16@gmail.com", icon: Email },
    { id: 2, name: "GitHub", link: "https://github.com/Vinaya-16", icon: GitHub },
    { id: 3, name: "Phone", link: "+91 8451963094", icon: Phone },
    { id: 4, name: "Availability", link: "Open for new projects", icon: avail }
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.message.trim() === ''
    ) {
      alert('Please fill all fields');
      return;
    }

    const react_api = process.env.REACT_APP_API_URI;

    const response = await fetch(`${react_api}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="cnt-container" id="Contact">
      <div className="cnt-head">
        <div className="subtitle">LET'S TALK</div>
        <div className="title">Contact</div>
        <div className="title-underline"></div>
      </div>
      <div className="cnt-section">
        <div className="cnt-left">
          <h3>Reach me via</h3>
          <div className="cnt-src-container">
            {src.map((source, index) => (
              <div className="sample" key={source.id}>
                <div className="icon"><img src={source.icon} alt={`${source.name}`} className="icon" /></div>
                <div className="content">
                  <p>{source.name}</p>
                  <p>{source.link}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cnt-right">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit">
              Send message
            </button>

          </form>
        </div>
      </div>
    </section >
  );
}

export default Contact;