import React from 'react';

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function Project() {
  const text = 'HELLO'



  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return  (
  <div className = "container">
  <p style={{marginTop: '30px', fontSize: 30}}>{text}</p>
  </div>
  )}; 

export default Project;
