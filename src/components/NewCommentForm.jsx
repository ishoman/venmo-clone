import React from 'react';
import PropTypes from 'prop-types';

function NewCommentForm(props){
  let _comment = null;

  return (
    <div>
      <form onSubmit={props.onCommentSubmission}>
        <textarea
          type='text'
          id='comment'
          placeholder='Type Comment'
          ref={(input) => {_comment = input;}}/>
      </form>
    </div>
  );
}

NewCommentForm.propTypes = {
  onCommentSubmission: PropTypes.func
};

export default NewCommentForm;
