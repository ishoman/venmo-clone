import React from 'react';
import PropTypes from 'prop-types';
import NewCommentForm from './NewCommentForm'

class CommentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentVisible: false,
      commentArray: []
    };

  let _comment = null

  handleCommentSubmission(event) {
    event.preventDefault();
    props.onCommentSubmission({comment: _comment.value})
    const newCommentList = this.state.comments.slice();
    console.log(newCommentList);
  }


}

CommentControl.propTypes = {
  onCommentSubmission: PropTypes.func
}

export default CommentControl;
