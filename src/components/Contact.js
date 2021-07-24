import React from 'react';
import './Contact.css'

function Contact() {


  return  (
<div className='contact'>

    <h2>Contact Me</h2>

    <form>
        <label>Name</label>
        <input type="text" placeholder="Name"></input>

        <label>Email</label>
        <input type="text" placeholder="Email Address"></input>
        
        <label>Phone</label>
        <input type="text" placeholder="Phone"></input>

        <label>Comments</label>
        <input type="text" placeholder="Comments"></input>

        <input type="submit" value="Submit"></input>
    </form>
  </div>
  )}; 

export default Contact;
