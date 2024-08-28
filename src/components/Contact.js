import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <img src="/images/contact.jpg" alt="Contact Us" className="contact-img"/>
      <div className="contact-text">
        <h2>Contact Us</h2>
        <p>Email: info@restaurant.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Address: 123 Food St, Flavor Town, USA</p>
      </div>
    </div>
  );
}

export default Contact;
