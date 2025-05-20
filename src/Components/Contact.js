import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <div className="contact-left">
          <h2>Ecomart</h2>
          <p className='addr'>Thiruvenkadam - Sankarnkovil Main Road<br />
             Sankarankovil, Tenkasi District</p>
          <p><strong>Email:</strong> <a href="mailto:ecomartsangai@gmail.com" className='cont-details'>ecomartsangai@gmail.com</a></p>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/917200260036" target="_blank" rel="noopener noreferrer" className='cont-details'>+91 7200260036</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/ecomart_bazaar" target="_blank" rel="noopener noreferrer" className='cont-details'>@ecomart_bazaar</a></p>

          <div className="contact-socials">
            <a href="https://wa.me/917200260036" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a href="https://instagram.com/ecomart_bazaar" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon instagram" />
            </a>
            <a href="mailto:ecomartsangai@gmail.com">
              <FaEnvelope className="social-icon email" />
            </a>
          </div>
        </div>

        <div className="contact-right">
          <h3>We’d love to hear from you!</h3>
          <p>Feel free to reach out for any queries, suggestions or partnership opportunities.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
