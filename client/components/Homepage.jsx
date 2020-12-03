import React from 'react'
import {connect} from 'react-redux'
import {fetchModules, setSearchedModules} from '../actions/index'

class HomePage extends React.Component{

  state={
    searchValue: ''
  }

  componentDidMount (){
    this.props.dispatch(fetchModules())
  }

  handleChange = (event)=>{
    this.setState({
      searchValue: event.target.value
    })
   
  }
  
  handleSubmit = (event, filteredModules)=>{
    console.log('handle submitt')
    event.preventDefault()
    this.props.dispatch(setSearchedModules(filteredModules))
  }
  
  

  
  
  render (){
    
    const filteredModules = this.props.modules.filter(module =>{
      return module.title.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })

    return(
      <>
        <form onSubmit={()=>this.handleSubmit()}>
        <label htmlFor="search">SEARCH</label>
        <input type="text" value={this.props.searchValue} onChange={this.handleChange}/>
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
export default connect(mapStateToProps)(HomePage)