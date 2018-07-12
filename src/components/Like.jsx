import React from 'react';
import PropTypes from 'prop-types';

class Like extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLiked: false
    }
  this.handleLike = this.handleLike.bind(this);
  console.log(this.state)
  }

  handleLike() {
    if (this.state.isLiked === false){
      this.setState({isLiked:true})
    } else {
      this.setState({isLiked:false})
    }
  }

  render() {
    console.log();
  if(this.state.isLiked === true){
    return (
      <div>
        <p onClick={this.handleLike}>Unlike</p>
      </div>
    )
    } else {
      return (
        <div>
          <p onClick={this.handleLike}>Like</p>
        </div>
        )
      }
    }
}





Like.propTypes = {
  handleLike: PropTypes.func,
  isLiked: PropTypes.bool.isRequired
};

export default Like;
