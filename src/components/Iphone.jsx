import React from 'react';
import IphoneImage from './IphoneImage';
import PropTypes from 'prop-types';


function Iphone(props){
  return (
    <div>
      <style jsx>{`
          .iphone {
            position: relative;
            left: 200px;
            z-index: 2;
          }
        `}
      </style>
      <div className='iphone'>
        <IphoneImage transactionFeed={this.props.transactionFeed}/>
      </div>
    </div>
  );
}

Iphone.propTypes = {
  transactionFeed: PropTypes.object
}

export default Iphone;
