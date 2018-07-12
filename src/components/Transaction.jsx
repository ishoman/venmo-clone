import React from 'react';
import PropTypes from 'prop-types';
import Globe from './../assets/images/globe.png';
import CommentControl from './CommentControl';
import Like from './Like';

function Transaction(props) {
  return (
    <div className= 'transaction'>
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
            .timer {
              display:flex;
              justify-content: space-around;
              align-items: center;
              top: 10px;
              right: 10px;
              width: 40px;
              height: 14px;
              color: grey;
              font-size: 10px;
            }
            .time {
              text-decoration: underline dashed;
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
          <Like
            handleLike={props.handleLike}
            isLiked={props.isLiked}
          />
          <p><CommentControl/></p>
        </div>
      </div>
      <div className='timer'>
        <p className='time'>{props.timeOpen}</p>
        <img src={Globe}></img>
      </div>
    </div>
  );
}



Transaction.propTypes = {
  actor: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  handleLike: PropTypes.func,
  timeOpen: PropTypes.string,
};


export default Transaction;
