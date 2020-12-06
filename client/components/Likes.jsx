import React from 'react'
import {connect} from 'react-redux'
import { updateModuleLikes } from '../actions'



class Likes extends React.Component{
  
  state={
    likes: 0,
    imageSRC: "/images/favorite-border.svg"
  }

  clickHandler=()=>{
    console.log('click')
    console.log(this.props.module)
    let newCount = this.state.likes +1
    this.setState({
      likes: newCount,
      imageSRC: "/images/favorite-black.svg"
    })
    this.props.dispatch(updateModuleLikes(this.props.module))

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