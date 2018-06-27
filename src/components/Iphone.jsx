import React from 'react';
import IphoneImage from './IphoneImage';


function Iphone(){
  return (
    <div>
      <style jsx>{`
          .iphone {
            position: relative;
            left: 200px;
            z-index: 2;
          }
        `}
      </style>
      <div className='iphone'>
        <IphoneImage/>
      </div>
    </div>
  );
}

export default Iphone;
