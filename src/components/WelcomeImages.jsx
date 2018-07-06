import React from 'react';
import Android from './Android';
import Iphone from './Iphone';

class WelcomeImages extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      masterCommentList: []
    };
  }

  handleAddingNewCommentToList(newComment){}

  render(){
    return (
      <div>
        <style jsx>{`
              position: relative;
              `}
        </style>
        <Android/>
        <Iphone/>
      </div>
    );
  }
}

export default WelcomeImages;
