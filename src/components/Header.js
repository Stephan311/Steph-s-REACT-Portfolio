import React, { useState } from 'react';
import Project from './Project';
import About from './About'
import Contact from './Contact'

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Header() {
  const text = 'Stephan`s Coding Portfolio';
  const links = 'About Me';
  const work = 'Work';
  const contact = 'Contact Me';
  const resume = 'Resume';
  const linkstyle = { marginRight: 10 }
  const navStyle = {padding: 30 }

  const [hello, setHello] = useState('Hello')

  const linkCLick = () => {
    setHello(Project)
    console.log('hello')
}

const AboutCLick = () => {
  setHello(About)
  console.log('hello')
}

const ContactCLick = () => {
  setHello(Contact)
  console.log('hello')
}




  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return  (
  <div className = "container" style={navStyle}>
  <p style={{marginTop: '30px', fontSize: 30}}>{text}</p>
  <div style={{marginLeft: '0%'}}>
   <p onClick={AboutCLick} >{links}</p>
   <p onClick={linkCLick} style={linkstyle}>{work}</p>
   <p onClick={ContactCLick} style={linkstyle} >{contact}</p>
   <p style={linkstyle} >{resume}</p>
   {hello}
   </div>
  </div>
  )}; 

export default Header;
