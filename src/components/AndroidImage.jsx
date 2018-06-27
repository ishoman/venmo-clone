import React from 'react';
import AndroidPng from './../assets/images/android.png';

function AndroidImage(){
  return (
    <div>
      <style jsx>{`
          img {
            width: 324px;
            position: absolute;
            
          }
        `}
      </style>
      <img src={AndroidPng}></img>
    </div>
  );
}

export default AndroidImage;
