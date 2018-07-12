import React from 'react';
import IphonePng from './../assets/images/iphone.png';
import TransactionList from './TransactionList';
import PropTypes from 'prop-types';

function IphoneImage(props){
  console.log(props);
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
        <TransactionList transactionFeed={props.transactionFeed}/>
      </div>
    </div>
  );
}

IphoneImage.propTypes = {
  transactionFeed: PropTypes.array
}

export default IphoneImage;
