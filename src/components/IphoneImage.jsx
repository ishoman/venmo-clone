import React from 'react';
import IphonePng from './../assets/images/iphone.png';
import TransactionList from './TransactionList';

function IphoneImage(){
  return (
    <div>
      <style jsx>{`
          img {
            width: 324px;
            z-index: 2;
            position: absolute;
          }
        `}
      </style>
      <img src={IphonePng}></img>
      <div className="transaction-list">
        <TransactionList/>
      </div>
    </div>
  );
}

export default IphoneImage;
