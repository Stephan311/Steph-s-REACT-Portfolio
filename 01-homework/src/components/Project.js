import React from 'react';

function Project() {
  const text = 'HELLO'
  const box1 = { display: 'flex', marginTop: 50, width: 400, height: 100, borderStyle: 'dotted', borderWidth: 1, marginRight: 20, padding: 70, border: 'solid', backgroundSize: 'cover' }




  return  (
  <div className = "container">
  <p>{text}</p>

<div className='boxes'>
  <section className='box1' style={box1}>
    <a href="https://business-revenue-tracker.herokuapp.com/">
      <div style={{width: 100}} className='box1div'>
        <h3 style={{fontSize: 30}} className='Horiseon'> Revenue Tracker</h3>
        <p style={{position: 'relative', marginTop: -30, fontSize: 30, width: 600}} className='p2'>Express/Node/SQL/Handlebars</p>
      </div>
    </a>
    <a style={{position: 'relative', marginTop: 140, fontSize: 30, width: 600, paddingBottom: 10, paddingRight: 10, marginLeft: -70}} href="https://github.com/Stephan311/Marketing-Revenue-Tracker" className='p21'>Github Repo</a>
  </section>
</div>

  </div>
  )}; 

export default Project;
