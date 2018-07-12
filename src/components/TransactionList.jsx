import React from 'react';
import Transaction from './Transaction';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function TransactionList(props){
  console.log(props);
  return (
    <div className='notLoop'>
      <style jsx>{`
              .notLoop {
                position: relative;
                top: 130px;
                left: 25px;
                z-index: 3;
                width: 275px;
                height: 444px;
                background-color: white;
                overflow: hidden;
              }
              .loop {
                border-bottom: 1px solid gray;
              }
            `}


      </style>
      {props.transactionFeed.map((transaction) =>
        <div className='loop'>
          <Transaction
            actor={transaction.actor}
            target={transaction.target}
            description={transaction.description}
            image={transaction.image}
            key={v4()}
            handleLike={props.handleLike}
          />
        </div>
      )}
    </div>
  );
}

TransactionList.propTypes = {
  transactionFeed: PropTypes.object,
  handleLike: PropTypes.func
}


export default TransactionList;
