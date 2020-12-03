import React from 'react'
import {connect} from 'react-redux'
import {fetchModules} from '../actions/index'

class HomePage extends React.Component{

  state={
    searchValue: ''
  }

  componentDidMount (){
    this.props.dispatch(fetchModules())
  }


  
  render (){
    return(
      <>

        <label htmlFor="search">SEARCH</label>
        <input type="text" value={this.props.inputValue} onChange={this.handleChange}/>




      </>
    )
  }

}


function mapStateToProps(globalState) {
  return {
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(Home)