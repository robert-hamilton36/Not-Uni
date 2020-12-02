import React from 'react'


class HomePage extends React.Component{


  
  render (){
    return(
      <>

        <label htmlFor="search">SEARCH</label>
        <input type="text" value={this.props.inputValue} onChange={this.handleChange}/>




      </>
    )
  }

}