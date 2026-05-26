import React, { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const src = [
    {
      name: "Email",
      link: "vinayapatole564@gmail.com",
      icon: ""
    },
    {
      name: "GitHub",
      link: "github.com/Vinaya-16",
      icon: ""
    },
    {
      name: "LinkedIn",
      link: "Vinaya Patole",
      icon: ""
    },
    {
      name: "Location",
      link: "Mumbai, India",
      icon: ""
    },
    {
      name: "Availability",
      link: "Open for projects",
      icon: ""
    }
  ];

  return (
    <section className="ct-container" id="Contact">

      <div className="sk-head">
        <h4 className="sk-subtitle">LET'S TALK</h4>
        <h2 className="sk-title">Contact</h2>
        <div className="title-underline"></div>
      </div>

      <div className="ct-section">
        <div className="ct-left">

          <h3 className="ct-heading">Reach me via</h3>

          {src.map((source, index) => (
            <div className="ct-card" key={index}>

              <div className="ct-icon">
                {source.icon}
              </div>

              <div className="ct-info">
                <h4>{source.name}</h4>
                <p>{source.link}</p>
              </div>

            </div>
          ))}

        </div>

        <div className="ct-right">

          <form className="ct-form">

            <div className="form-group">
              <label>Your name</label>
              <input
                type="text"
                name="name"
                placeholder="Vinaya Patole"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Your email</label>
              <input
                type="email"
                name="email"
                placeholder="vinaya@gmail.com"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Any Project to be discussed"
                onChange={handleChange}
              ></textarea>
            </div>

            <button className="send-btn">
              Send Message →
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;