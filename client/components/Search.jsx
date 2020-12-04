import React from 'react'
import {connect} from 'react-redux'
import {fetchModules, setSearchedModules} from '../actions/index'
import {Redirect} from 'react-router'

class Search extends React.Component{

  state={
    searchValue: '',
    fireRedirect: false
  }

 

  handleChange = (event)=>{
    this.setState({
      searchValue: event.target.value
    })
   
  }
  
  handleSubmit = (event)=>{
    console.log('handle submit')
    event.preventDefault()
    
    const filteredModules = this.props.modules.filter(module =>{
      return (module.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
      )
    }) 
    
    this.props.dispatch(setSearchedModules(filteredModules))
    this.setState({
      fireRedirect:true
    })
    }
  
  

  
  
  render (){
    

    return(
      <>
        <form  onSubmit={this.handleSubmit}>
        <label htmlFor="search"></label>
        <input className='search' type="text" value={this.props.searchValue} onChange={this.handleChange}/>
        </form>
        {this.state.fireRedirect && (
          <Redirect to='/categories/results'/>
        )}

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