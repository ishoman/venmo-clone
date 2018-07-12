import React from 'react';
import PropTypes from 'prop-types';

function Like(props){
  return (
    <div>
      <p onClick={props.handleLike}>{props.like}</p>
    </div>
  );
}


Like.propTypes = {
  like: PropTypes.string.isRequired,
  handleLike: PropTypes.func,
  isLiked: PropTypes.bool.isRequired
};

export default Like;
