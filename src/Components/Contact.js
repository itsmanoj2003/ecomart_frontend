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
          <p><strong>Instagram:</strong> <a href="https://www.instagram.com/ecomart_sangai?utm_source=ig_web_button_share_sheet&igsh=MW03MzliMWtnNDYxMg==" target="_blank" rel="noopener noreferrer" className='cont-details'>@ecomart_sangai</a></p>

          <div className="contact-socials">
            <a href="https://wa.me/917200260036" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="social-icon whatsapp" />
            </a>
            <a href="https://www.instagram.com/ecomart_sangai?utm_source=ig_web_button_share_sheet&igsh=MW03MzliMWtnNDYxMg==" target="_blank" rel="noopener noreferrer">
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
            <p style={{fontSize:'16px',fontFamily:'"Poppins", serif',color:'#E92B5B'}}>Developed By</p>
            <img src={softstorlogo} alt='softstor logo' className='softstor-logo'/>
          </div>

          <div className='softstor-right-container'>
            <p style={{fontSize:'16px',fontFamily:'"Poppins", serif'}}>Developed By</p>
            <h2 style={{fontSize:'25px'}}>Soft Stor Technology</h2>

            <p style={{fontSize:'13px',marginRight:'190px',marginTop:'20px'}}>Mobile No:</p>
            <div className='contact-numbers'>
              <h5 style={{fontSize:'13px',marginRight:'180px',marginTop:'10px'}}><a href="tel:+916374358764" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>+91 6374358764</a></h5>
              <h5 style={{fontSize:'13px',marginRight:'180px',marginTop:'10px'}}><a href="tel:+918610729420" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>+91 8610729420</a></h5>
              <h5 style={{fontSize:'13px',marginRight:'180px',marginTop:'10px'}}><a href="tel:+917358916638" target="_blank" rel="noopener noreferrer" style={{color:'white'}}>+91 7358916638</a></h5>
            </div>
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
