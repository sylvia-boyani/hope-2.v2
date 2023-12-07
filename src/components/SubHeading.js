import React from 'react';
//import logo from '../assets/new-logo.png'

const SubHeading = ({title}) => (
  <div style={{marginBottom: '1rem'}}>
    <p className='p__cormorant'>{title}</p>
    {/* <img src={logo} alt='spoon' className='spoon__img'/> */}
  </div>
);

export default SubHeading;