import React, { useState } from "react";

function Contact() {

  const src = [
    { id: 1, name: "Email", link: "vinayapatole16@gmail.com", icon: "" },
    { id: 2, name: "GitHub", link: "github.com/Vinaya-16", icon: "" },
    { id: 3, name: "Phone", link: "+91 8451963094", icon: "" },
    { id: 4, name: "Availability", link: "Open for new projects", icon: "" }
  ];

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
              <div className="sample">
                <div className="icon"><img src={source.icon} /></div>
                <div className="content">
                  <p>{source.name}</p>
                  <p>{source.link}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cnt-right"></div>
      </div>
    </section >
  );
}

export default Contact;