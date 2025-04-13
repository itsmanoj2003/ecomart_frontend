import React from 'react'
import './Contact.css'


import Whatsapp from '../Components/assets/whatsapp.png'
import Instagram from '../Components/assets/instagram.png'
import Gmail from '../Components/assets/gmail.png'
import Phone from '../Components/assets/phone.png'

export default function Contact() {
  return (
    <div className='contact'>

        <div className='contact-main'>

            <div className='contactimg-container1'>
                    <img src={Whatsapp} className='whatsapp-img'/>
                    <h1 className='contact-title'>EcoMart</h1>

                    <label className='address-title'>Address</label>
                    <div className='address-container'>
                        <p className='mart-address'>Thiruvenkadam - Sankarnkovil Main Road <br/> Sankarankovil,Tenkasi District</p>
                    </div>
                    
                    <img src={Instagram} className='instagram-img'/>
                    <img src={Gmail} className='gmail-img'/>
            </div>

                <fieldset className='contact-content'>
                <legend className='contact-legent'>Reach us on</legend>

                <div className='contact-details'>
                <label className='socialmedia-names'>Whatsapp</label> <a href='tel:+916374358764'><h2 className='whatsappnumber'>+91 7200260036</h2></a> <br></br>
                <label className='socialmedia-names'>Instagram</label> <a href='https://www.instagram.com/accounts/login/?hl=en'><h2 className='instagramid'>@ecomart_bazaar</h2></a> <br></br>
                <label className='socialmedia-names'>Gmail</label> <a href='mailto:manojprabhakaran524@gmail.com'><h2 className='gmailaccount'>ecomartsangai@gmail.com</h2></a> <br></br>
                </div>

                </fieldset>

            <div className='contactimg-container2'>
                <img src={Phone} className='phone-img'/>
            </div>
        </div>

    </div>
  )
}
