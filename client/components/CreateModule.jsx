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
    duration: "",
    number_of_elements: "", // this is calculated later
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
      case "heading":
        return (
          <div className="heading">
            <input className="element-input" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} type="text" placeholder="Heading" /> 
          </div>
        )
        
      case "paragraph":
        return (
          <div className="heading">
            <textarea onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} placeholder="text" />
          </div>
        )

      case "link":
        return (
          <div className="heading">
            <input className="element-input" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} type="text" placeholder="Link"/>
          </div>
        )

      case "video":
        return (
          <div className="heading">
            <input className="element-input" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} type="text" placeholder="youtube embed link"/>
          </div>
        )
    }
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
    this.setState({
      category: evt.currentTarget.value
    })
  }

  deleteElementHandler = (i) => {
    let tempElements = this.state.elements
    tempElements.splice(i, 1)
    this.setState({
      elements: tempElements
    })
  } 

  positionChanger = (direction, i) => {
    let rearrangedElements = [...this.state.elements]
    if (direction === "down") {
      this.arrayMove(rearrangedElements, i, i+1 )
    } else if (direction === "up") {
      this.arrayMove(rearrangedElements, i, i-1 )
    }
    
    this.setState({elements: rearrangedElements})
  }
  
  arrayMove = (arr, oldIndex, newIndex) => {
    arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  }

  submitHandler = () => {
    createModuleAPI(this.state)
  }
  
  render () {

    return (
      <div className='create-module'>
        <div className="meta-input">
          <h1> Create A Module </h1>
          <input onChange={this.titleChangeHandler} type="text" placeholder="title"/>
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
          <input onChange={this.durationChangeHandler} type="number" placeholder="duration in minutes"/>
        </div>

        <div className="element-input-div-container" >
          {this.state.elements.map((element, i) => {

            const spacer = <div className="spacer" style={{height: "20px"}}/>
            let needsSpacer = false

            if (i > 0 && element.type == 'heading') {
              needsSpacer = true
            }
          
            return (
              <>
                {needsSpacer && spacer}
                <div className="element-input-div" style={{display: "flex", flexDirection: "row"}}>
                  {this.renderElement(element, i)}
                  <input onClick={() => this.positionChanger('up', i)} type="button" value="<" />
                  <input onClick={() => this.positionChanger('down', i)} type="button" value=">" />
                  <input className="delete-element" onClick={() => this.deleteElementHandler(i)} type="button" value="delete"/>
                </div>
              </>
            ) 
          })}
        </div>
        
        <div className="add-element-buttons">
          <input type="button" value="Add Step"          onClick={() => this.addElementHandler("heading")} />
          <input type="button" value="Add Text"          onClick={() => this.addElementHandler("paragraph")} />
          <input type="button" value="Add External Link" onClick={() => this.addElementHandler("link")} />
          <input type="button" value="Add Video"         onClick={() => this.addElementHandler("video")} />
        </div>

        <input type="button" value="submit" onClick={this.submitHandler}/>
      </div>
    )
  }
}

export default CreateModule
