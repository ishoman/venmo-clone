import React from 'react';
import WelcomeImages from './WelcomeImages';
import SignUp from './SignUp';

function Welcome(){
  return (
    <div>
      <style jsx>{`
        display: flex;
        justify-content: space-between;
      `}

      </style>
      <WelcomeImages/>
      <SignUp/>
    </div>
  );
}

export default Welcome;
