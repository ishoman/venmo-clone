import React from 'react';
import NewCommentForm from './NewCommentForm';

class CommentControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentFormVisible: false
    };
    this.handleComment = this.handleComment.bind(this);

  }

  handleComment(){
    if (this.state.commentFormVisible === false){
      this.setState({commentFormVisible: true});
    } else {
      this.setState({commentFormVisible: false});
    }
  }


  render(){
    let commentsVisible = null;
    if (this.state.commentFormVisible) {
      commentsVisible = <NewCommentForm onCommentSubmission={this.handleComment} />;
    } else {
      commentsVisible = null;
    }
    return (
      <div>
        <style jsx>{`
            p {
              margin: 0;
              padding: 0;
            }
          `}

        </style>
        <p onClick={this.handleComment}>Comment</p>
        <div>
          {commentsVisible}
        </div>
      </div>
    );

  }

}


export default CommentControl;
