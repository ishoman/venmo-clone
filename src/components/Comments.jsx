import React from 'react';
import Transaction from "./Transaction";

function Comments(){
  let _comment = null

  handleCommentSubmission(event) {
    event.preventDefault();
    
  }
  return (
    <div>
      <form onSubmit={handleCommentSubmission}>
        <textarea
          type='text'
          id='comment'
          placeholder='Type Comment'
          ref={(input) => {_comment = input;}}/>
      </form>
    </div>
  );
}
}

export default Comments;
