import Logo from './Logo';
import React from 'react';
import SignIn from './SignIn';

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
        <SignIn/>
      </div>
      <hr/>
    </div>
  );
}

export default Nav;
