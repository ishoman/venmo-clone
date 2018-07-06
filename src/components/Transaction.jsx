import React from 'react';
import PropTypes from 'prop-types';
import Globe from './../assets/images/globe.png'

function Transaction(props){
  return (
    <div>
      <style jsx>{`
          div {
            display: flex;
            width: 282px;
            height: 70px;
            position: relative;
            z-index: 4;

          }
          .image {
            width:30px;
            display: flex;
            align-items: center;
            left: 5px;
            bottom: 8px;
          }
          .image img {
            width: 30px;
            height: 30px;
            border-radius: 50%;

          }
          .payment-text {
            width: 220px;
            font-size: 10.5px;
            display: flex;
            flex-direction: column;
            top: 10px;
            left: 20px;
            margin:0;
          }
          .payment-text p {
            margin: 0;
          }

          .payment {
            line-height: 17px;
          }
          .description {
            line-height: 14px;
          }
          .feedback {
            color: grey;
            top: 6px;
            width: 100px;
            display: flex;
            justify-content: space-between;
          }
          `}
      </style>
      <div className='image'>
        <img src={props.image}></img>
      </div>
      <div className='payment-text'>
        <p className='payment'><strong>{props.actor}</strong> paid <strong>{props.target}</strong></p>
        <p className='description'>{props.description}</p>
        <div className='feedback'>
          <p>Like</p>
          <p>Comment</p>
        </div>
        <div className='timer'>
          <img src={Globe}></img>
          <p></p>
        </div>
      </div>
    </div>
  );
}

Transaction.propTypes = {
  actor: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};


export default Transaction;
