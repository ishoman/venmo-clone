import React from 'react';
import NewCommentForm from './NewCommentForm';

class CommentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentFormVisible: true
    };
    this.handleCommentSubmission = this.handleCommentSubmission.bind(this);
  }

  handleComment(){
    if (this.state.commentShow === false){
      this.setState({commentShow: true});
      this.setState({commentButton: 'Hide'});
    } else {
      this.setState({commentShow: false});
      this.setState({commentButton: 'Comment'});
    }
  }

  handleCommentSubmission(event) {
    event.preventDefault();
    this.setState({commentFormVisible: false});
  }

  render(){
    let commentsVisible = null;
    if (this.state.commentFormVisible) {
      commentsVisible = <NewCommentForm onCommentSubmission={this.handleCommentSubmission} />;
    } else {
      commentsVisible = null;
    }
    return (
      <div>

        {commentsVisible}
      </div>
    );

  }

}


export default CommentControl;
