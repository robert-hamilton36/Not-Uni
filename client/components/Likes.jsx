import React from 'react'
import {connect} from 'react-redux'
import { decreaseModuleLikes, increaseModuleLikes } from '../actions'




class Likes extends React.Component{
  
  state={
    likes: 0,
    imageSRC: "/images/favorite-border.svg"
  }

  clickHandler=()=>{
    
    this.setState({
      likes: (this.state.likes === 0) ? 1 :0,
      imageSRC: (this.state.likes === 0) ?  "/images/favorite-black.svg" : "/images/favorite-border.svg"
    }, () => {
      this.afterSetStateFinished();
    })
  }

  afterSetStateFinished = () =>{

    this.state.likes === 1 ? this.props.dispatch(increaseModuleLikes(this.props.module)) : this.props.dispatch(decreaseModuleLikes(this.props.module))
  }


 

  render (){
    
    return(
      <div className='Likes'>
        <img onClick ={()=>this.clickHandler()} src={this.state.imageSRC} alt="like button"/>
        
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