import React from 'react';
import AndroidPng from './../assets/images/android.png';

function AndroidImage(){
  return (
    <div>
      <style jsx>{`
          img {
            width: 324px;
            height: 635px;
            position: absolute;
            top: 35px;
            overflow: hidden;
          }
        `}
      </style>
      <img src={AndroidPng}></img>
    </div>
  );
}

export default AndroidImage;
