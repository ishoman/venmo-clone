import React from 'react';
import Android from './Android';
import Iphone from './Iphone';

function WelcomeImages(){
  return (
    <div>
      <h1>welcome</h1>
      <Android/>
      <Iphone/>  
    </div>
  );
}

export default WelcomeImages;
