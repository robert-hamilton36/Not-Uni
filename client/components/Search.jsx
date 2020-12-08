import React from 'react'
import { connect } from 'react-redux'

class Search extends React.Component {
  state={
    searchValue: ' '
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
  }

  handleSubmit = (event) => {
    this.setState({ fireRedirect: false })
    event.preventDefault()
    this.props.history.push('/categories/results/' + this.state.searchValue)
  }

  render () {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="search"></label>
          <input className='search' type="text" placeholder='Search' value={this.props.searchValue} onChange={this.handleChange}/>
        </form>
      </>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(Search)
