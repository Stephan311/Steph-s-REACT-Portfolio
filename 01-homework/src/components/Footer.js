import React, { useState } from 'react';

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Footer() {
    const links = 'About Me';
  const work = 'Work';
  const contact = 'Contact Me';
  const resume = 'Resume';
  const linkstyle = { marginRight: 10 }

  const [hello, setHello] = useState('Hello');

//   setHello('wow')

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return  (
  <div className = "container" style={{marginTop: 1000, alignContent: 'center'}}>
   <a href="hello.com" style={linkstyle}>{links}</a>
   <a href="hello.com" style={linkstyle}>{work}</a>
   <a href="hello.com" style={linkstyle}>{contact}</a>
   <a href="hello.com" style={linkstyle}>{resume}</a>
   {hello}
  </div>
  )};

export default Footer;
