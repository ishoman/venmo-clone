import React from 'react';
import cursor from './../assets/images/blinking-cursor.gif';

function CursorGif(){
  return (
    <div>
      <style jsx>{`
          img {
            height: 18px;
            position: absolute;
            top: 309px;
            left: 31px;
            z-index: 1;
          }
        `}
      </style>
      <img src={cursor}></img>
    </div>
  );
}

export default CursorGif;
