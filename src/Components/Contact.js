import React from 'react';
import './Contact.css';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaGlobe } from 'react-icons/fa';



import softstorlogo from '../Components/assets/softstorlogo.png'

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


      <div className='softstor-container'>

          <div className='softstor-left-container'>
            <img src={softstorlogo} alt='softstor logo' className='softstor-logo'/>
          </div>

          <div className='softstor-right-container'>
            <p style={{fontSize:'16px',fontFamily:'"Poppins", serif'}}>Developed By</p>
            <h2 style={{fontSize:'25px'}}>Soft Stor Technology</h2>

            <p style={{fontSize:'13px',marginRight:'190px',marginTop:'20px'}}>Mobile No:</p>
            <h5 style={{fontSize:'13px',marginRight:'155px',marginTop:'10px'}}>+91 6374358764</h5>
            <h5 style={{fontSize:'13px',marginRight:'155px',marginTop:'10px'}}>+91 8610729420</h5>
            <h5 style={{fontSize:'13px',marginRight:'155px',marginTop:'10px'}}>+91 7358916638</h5>

            <div className="contact-socials">
            <a href="https://softstortechnology.netlify.app/" target="_blank" rel="noopener noreferrer">
              <FaGlobe className="social-icon softstor-whatsapp" />
            </a>
            <a href="https://www.instagram.com/soft_stor_technology?igsh=MXFjd2cwYjB3MHFpag== " target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon softstor-instagram" />
            </a>
            <a href="mailto:softstortechnology@gmail.com">
              <FaEnvelope className="social-icon softstor-email" />
            </a>
          </div>

          </div>

      </div>


    </div>
  );
};

export default Contact;
