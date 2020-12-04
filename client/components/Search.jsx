import React from 'react'
import {connect} from 'react-redux'
import {fetchModules, setSearchedModules} from '../actions/index'
import {Redirect} from 'react-router'

class Search extends React.Component{

  state={
    searchValue: this.props.searchTerm,
 
  }

 

  handleChange = (event)=>{
    this.setState({
      searchValue: event.target.value
    })
   
  }
  
  handleSubmit = (event)=>{
    
    event.preventDefault()
    
    this.props.history.push('/categories/results/' + this.state.searchValue)
    
   
    }
  
  

  
  
  render (){
    

    return(
      <>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="search"></label>
        <input type="text" value={this.props.searchValue} onChange={this.handleChange} placeholder='What would you like to learn about today?'/>
        </form>
      

      </>
    )
  }

}


function mapStateToProps(globalState) {
  return {
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(Search)