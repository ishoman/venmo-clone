import Logo from './Logo';
import React from 'react';
import SignIn from './SignIn';
import About from './About';
import Business from './Business';
import Card from './Card';
import Security from './Security';
import ContactUs from './ContactUs';

function Nav(){
  return (
    <div>
      <style jsx>{`
        .nav {
          display:flex;
          justify-content: space-between;
        }
        `}
      </style>
      <div className='nav'>
        <Logo/>
        <About/>
        <Business/>
        <Card/>
        <Security/>
        <ContactUs/>
        <SignIn/>
      </div>
      <hr/>
    </div>
  );
}

export default Nav;
