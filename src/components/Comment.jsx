import React from 'react';
import PropTypes from 'prop-types';
import Transaction from "./Transaction";

function Comment(){
  let _comment = null

  handleCommentSubmission(event) {
    event.preventDefault();
    props.onCommentSubmission({comment: _comment.value})
    const newCommentList = this.state.comments.slice();
    console.log(newCommentList);
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

Comment.propTypes = {
  onCommentSubmission: PropTypes.func
}

export default Comment;
