import React from 'react';
import PropTypes from 'prop-types';

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
            border-bottom: 1px solid gray;

          }
          .image {
            width:30px;
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
            justify-content: flex-start;
            left: 20px;
            margin:0;
          }
          .payment-text p {
            margin: 0;
          }

          .payment {
            line-height: 14px;
          }
          .description {
            line-height: 14px;
          }
          `}
      </style>
      <div className='image'>
        <img src={props.image}></img>
      </div>
      <div className='payment-text'>
        <p className='payment'><strong>{props.actor}</strong> paid <strong>{props.target}</strong></p>
        <p className='description'>{props.description}</p>
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
