import React from 'react';
import Android from './Android';
import Iphone from './Iphone';

function WelcomeImages() {
  return (
    <div>
      <style jsx>{`
            position: relative;
            `}
      </style>
      <Android/>
      <Iphone/>
    </div>
  );
}

export default WelcomeImages;
