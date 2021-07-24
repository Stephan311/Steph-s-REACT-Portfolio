import React, { useState } from 'react';
import Project from './Project';
import About from './About'
import Contact from './Contact'
import './Header.css'

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Header() {
  const text = 'Stephan`s Coding Portfolio';
  const links = 'About Me';
  const work = 'Work';
  const contact = 'Contact Me';
  const resume = 'Resume';
  const navStyle = {padding: 30 }

  const [hello, setHello] = useState('Hello')

  const linkCLick = () => {
    setHello(Project)

}

const AboutCLick = () => {
  setHello(About)

}

const ContactCLick = () => {
  setHello(Contact)

}




  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return  (
  <div className = "container" style={navStyle}>
  <p className="name"> {text}</p>
  <div className = 'nav'>
   <p className="navlink" onClick={AboutCLick} >{links}</p>
   <p className="navlink" onClick={linkCLick} >{work}</p>
   <p className="navlink" onClick={ContactCLick} >{contact}</p>
   <a className="navlink" href="https://drive.google.com/file/d/1LfjBi3Evg_rSrEAMPTGaVqN5A8RJWWYi/view?usp=sharing" >{resume}</a> 
   <p className = "hello">{hello}</p>
   </div>

  </div>
  
  )}; 

export default Header;
