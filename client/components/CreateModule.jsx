import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { createModuleAPI } from '../apis/modules';



class CreateModule extends React.Component {

  state = {
    title: "",
    user_id: "",
    category: "",
    duration: null,
    number_of_elements: null, // this is calculated later
    elements: []
  }

  addElementHandler = (type) => {
    let newElement = {
      type: type,
      content: ""
    }

    this.setState({
      elements: [...this.state.elements, newElement ]
    })
  }

  elementChangeHandler = (evt, i) => {
    let newElements = [...this.state.elements]
    newElements[i].content = evt.target.value

    this.setState({
      elements: [...this.state.elements, ]
    })
  }

  renderElement = (element, i) => {
    switch (element.type) {
      case "text":
        return <textarea onChange={(evt) => this.elementChangeHandler(evt, i)} placeholder="text" />

      case "heading":
        return <input    onChange={(evt) => this.elementChangeHandler(evt, i)} type="text" placeholder="Heading" />

      case "link":
        return <input    onChange={(evt) => this.elementChangeHandler(evt, i)} type="text" placeholder="Link"/>

      case "video":
        return <input    onChange={(evt) => this.elementChangeHandler(evt, i)} type="text" placeholder="youtube embed link"/>
    }
  }

  submitHandler = () => {
    console.log(this.state)
    createModuleAPI(this.state)
  }

  titleChangeHandler = (evt) => {
    this.setState({
      title: evt.target.value
    })
  }
  
  durationChangeHandler = (evt) => {
    this.setState({
      duration: evt.target.value
    })
  }

  categoryChangeHandler = (evt) => {
    console.log(evt.currentTarget.value)
    this.setState({
      category: evt.currentTarget.value
    })
  }

  render () {

    return (
      <div className='create-module'>
        <h1> Create A Module </h1>
        <input onChange={this.titleChangeHandler} type="text" placeholder="title"/>
        <br/>

        <h4> Categpry </h4>

        <div className="category-container">
          <div className="category-card">
            <label > <input onChange={this.categoryChangeHandler} type="radio" value="javascript" name="category" /> javascript </label>
          </div>

          <div className="category-card">
            <label > <input onChange={this.categoryChangeHandler} type="radio" value="python" name="category" /> python  </label>
          </div>

          <div className="category-card">
            <label > <input onChange={this.categoryChangeHandler} type="radio" value="other" name="category" /> other </label>
          </div>
        </div>

        <br />

        <br/>
        <input onChange={this.durationChangeHandler} type="number" placeholder="duration in minutes"/>
        <br/>



        <br/> 

        <div className="elements" >
          {this.state.elements.map((element, i) => this.renderElement(element, i))}
        </div>
        
        <div className="add-element-button">
          <input type="button" value="Add Text"            onClick={() => this.addElementHandler("text")} />
          <input type="button" value="Add Heading"         onClick={() => this.addElementHandler("heading")} />
          <input type="button" value="Add External Link"   onClick={() => this.addElementHandler("link")} />
          <input type="button" value="Add Video"           onClick={() => this.addElementHandler("video")} />
        </div>

        <input type="button" value="submit" onClick={this.submitHandler}/>
      </div>
    )
  }
}

export default CreateModule
