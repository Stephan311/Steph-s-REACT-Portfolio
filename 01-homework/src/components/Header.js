import React from 'react';

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Header() {
  const text = 'Stephan`s Coding Portfolio';
  const links = 'About Me';
  const work = 'Work';
  const contact = 'Contact Me';
  const resume = 'Resume';


  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return  (
  <div className = "container">
  <p>{text}</p>
   <a href="hello.com">{links}</a>
   <a href="hello.com">{work}</a>
   <a href="hello.com">{contact}</a>
   <a href="hello.com">{resume}</a>
  </div>
  )};

export default Header;
