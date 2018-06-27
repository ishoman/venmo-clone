import React from 'react';
import IphonePng from './../assets/images/iphone.png';

function IphoneImage(){
  return (
    <div>
      <style jsx>{`
          img {
            width: 324px;
          }
        `}
      </style>
      <img src={IphonePng}></img>
    </div>
  );
}

export default IphoneImage;
