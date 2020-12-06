import React from "react"


export default class CategoryCard extends React.Component {


  clickMe = () => {
    this.props.callBack()
  }
  render () {
    return (
      <div className={this.props.isActive ? "category-radio selected" : "category-radio"} onClick={() => this.clickMe(this.props.category)} > 
        <img src={`/images/${this.props.category}-icon.png`} />
        <span> {this.props.category} </span> 
      </div>
    )
  }
}