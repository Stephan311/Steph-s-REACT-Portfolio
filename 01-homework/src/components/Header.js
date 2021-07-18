import React, { useState } from 'react';
import Project from './Project';

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
  const navStyle = { backgroundColor: 'black', color: 'white', padding: 30 }

  const [hello, setHello] = useState('Hello')

  const linkCLick = () => {
    setHello(Project)
    console.log('hello')
}




  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return  (
  <div className = "container" style={navStyle}>
  <p style={{marginTop: '30px', fontSize: 30}}>{text}</p>
  <div style={{marginLeft: '80%', color: 'white'}}>
   <a onClick={linkCLick} style={linkstyle} href="hello.com">{links}</a>
   <a style={linkstyle} href="hello.com">{work}</a>
   <a style={linkstyle} href="hello.com">{contact}</a>
   <a style={linkstyle} href="hello.com">{resume}</a>
   {hello}
   </div>
  </div>
  )}; 

export default Header;
