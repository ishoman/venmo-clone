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

  handleAddingNewCommentToList(newComment){
    const newMasterCommentList = this.state.masterCommentList.slice();
    newMasterCommentList.push(newComment);
    this.setState({masterCommentList: newMasterCommentList});
  }

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
