import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';

// TODO: Add a comment explaining what this function is doing
// This function is a functional component that helps us split the UI into distinct parts.
// In this case, we are returning another component, <HelloReact/> from it.
function App() {
  return (
    <div>
   <Header />
   <Project />
   <Footer />
   </div>

  )

}

export default App;
