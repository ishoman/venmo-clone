import React from 'react';
import PropTypes from 'prop-types';
import Globe from './../assets/images/globe.png';
import Moment from 'moment';



class Transaction extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLiked: false,
      likeButton: 'Like',
      time: null
    };
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(){
    if (this.state.isLiked === false){
      this.setState({isLiked: true});
      this.setState({likeButton: 'Unlike'});
    } else {
      this.setState({isLiked: false});
      this.setState({likeButton: 'Like'});
    }
  }

  componentDidMount(){
  }

  updateTransactionTime() {
    const newTransactionTime = (this.minutesAgo).fromNow(true);
    console.log(newTransactionTime);
    this.setState({time: newTransactionTime});
  }


  render() {
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
            `}
        </style>
        <div className='image'>
          <img src={this.props.image}></img>
        </div>
        <div className='payment-text'>
          <p className='payment'><strong>{this.props.actor}</strong> paid <strong>{this.props.target}</strong></p>
          <p className='description'>{this.props.description}</p>
          <div className='feedback'>
            <p onClick={this.handleLike}>{this.state.likeButton}</p>
            <p>Comment</p>
          </div>
        </div>
        <div className='timer'>
          <p>{this.state.time}</p>
          <img src={Globe}></img>
        </div>
      </div>
    );
  }
}


Transaction.propTypes = {
  actor: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  minutesAgo: PropTypes.instanceOf(Moment).isRequired,
};


export default Transaction;
