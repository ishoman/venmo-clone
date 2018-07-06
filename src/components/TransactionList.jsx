import React from 'react';
import Transaction from './Transaction';


const transactionFeed = [
  {
    actor: 'Patrick A',
    target: 'Naja G',
    description: 'Beautiful glove',
    image: 'https://venmopics.appspot.com/u/v1/m/0f0cab35-c81f-47f6-89f2-29362bcdddbb'
  },
  {
    actor: 'Mike C',
    target: 'Robbie N',
    description: 'Security deposit',
    image: 'https://venmopics.appspot.com/u/v1/n/293f994a-9068-4fcc-9cc5-2ee02b38e9d3'
  },
  {
    actor: 'Blake H',
    target: 'Solomiya S',
    description: 'Book cover',
    image: 'https://venmopics.appspot.com/u/v2/n/7384a31b-4832-4fd6-aa34-c0e79fac86f8'
  },
  {
    actor: 'Brendan A',
    target: 'Alex M',
    description: 'Electric',
    image: 'https://venmopics.appspot.com/u/v2/m/1710641c-c76e-4e61-b0f4-6f16abff3c25'
  },
  {
    actor: 'Ansley R',
    target: 'Ryland L',
    description: 'Dinner',
    image: 'https://s3.amazonaws.com/venmo/no-image.gif'
  },
  {
    actor: 'Kelsey C',
    target: 'Dana D',
    description: 'Lunch',
    image: 'https://venmopics.appspot.com/u/v2/m/385c90a4-9862-498c-a384-2e0231ed6aac'
  },
  {
    actor: 'Kara Q',
    target: 'Calvin W',
    description: 'Booze',
    image: 'https://venmopics.appspot.com/u/v2/m/385c90a4-9862-498c-a384-2e0231ed6aac'
  }
];

function TransactionList(){
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
      {transactionFeed.map((transaction, index) =>
        <div className='loop'>
          <Transaction
            actor={transaction.actor}
            target={transaction.target}
            description={transaction.description}
            image={transaction.image}
            minutesAgo={transaction.minutesAgo}
            key={index}
          />
        </div>
      )}
    </div>
  );
}


export default TransactionList;
