import React from 'react'
import {connect} from 'react-redux'
import { decreaseModuleLikes, increaseModuleLikes } from '../actions'
import MessageSaved from './MessageSaved'




class Likes extends React.Component{
  
  state={
    likes: 0,
    imageSRC: "/images/favorite-border.svg",
    savedMessage: ''
  }

  clickHandler=()=>{ 
    this.setState({
      likes: (this.state.likes === 0) ? 1 :0,
      imageSRC: (this.state.likes === 0) ?  "/images/favorite-black.svg" : "/images/favorite-border.svg",
      savedMessage: (this.state.likes === 0) ? true : false,
    }, () => {
      this.afterSetStateFinished();
      this.setMessage();
    })
  }

  afterSetStateFinished = () =>{
    this.state.likes === 1 ? this.props.dispatch(increaseModuleLikes(this.props.module)) : this.props.dispatch(decreaseModuleLikes(this.props.module))

  }

  setMessage = () => {
    this.setState({
      savedMessage: (this.state.likes === 1) ?  true : false });
      setTimeout(function(){
        this.setState({savedMessage:false});
        }.bind(this),2000); 
  }


 

  render (){
    
    return(
      <div className='likes'>
        <img onClick ={()=>this.clickHandler()} src={this.state.imageSRC} alt="like button"/>
        {this.state.savedMessage && <MessageSaved/>}
      
      </div>
    )
  }

}

function mapStateToProps(globalState) {
  return {
    modules: globalState.modules
}
}
export default connect(mapStateToProps)(Likes)