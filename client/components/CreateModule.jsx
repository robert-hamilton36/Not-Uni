import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { createModuleAPI } from '../apis/modules';



class CreateModule extends React.Component {

  state = {
    title: "",
    user_id: "",
    description: "",
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
          <input className="input-box heading-input" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} type="text" placeholder="Heading" /> 
        )
        
      case "paragraph":
        return (
          <textarea className="input-box paragraph-input" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} placeholder="text" />
        )
        
      case "link":
        return (
          <div className="link-input input-box">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>
            <input className="" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} type="text" placeholder="Link"/>
          </div>
        )

      case "video":
        return (
          <div className="link-input input-box">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
            <input className="" onChange={(evt) => this.elementChangeHandler(evt, i)} value={this.state.elements[i].content} type="text" placeholder="Youtube video link"/>
          </div>

        )
    }
  }


  // TODO: make these three into one function
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
  
  categoryChangeHandler = (category) => {
    this.setState({
      category: category
    })
  }
  //

  metaChangeHandler = (evt, propType) => {
    this.setState({
      [propType]: evt.target.value
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
      .then(() => {
        setTimeout(() => {
          this.props.history.push(`/modulecreated`)
          console.log("2")
        }, 1500)
      })
  }
  
  render () {

    return (
      <div className='create-module'>
        <div className="meta-input">
          <h1> Create A Module </h1>
          
          <input className="input-box title-input" onChange={(evt) => this.metaChangeHandler(evt, 'title')} type="text" placeholder="title"/>
          
          <textarea className="input-box description-input" onChange={(evt) => this.metaChangeHandler(evt, 'description')} placeholder="short desciption" /> 
        
          <div className="category-container">

            {/* TODO: make these into a component
            */}

            <div className={this.state.category === "javascript" ? "category-radio selected" : "category-radio"} onClick={() => this.categoryChangeHandler("javascript")} > 
              <img src="/images/javascript-icon.png" />
              <span> JavaScript </span> 
            </div>

            <div className={this.state.category === "html" ? "category-radio selected" : "category-radio"} onClick={() => this.categoryChangeHandler("html")} > 
              <img src="/images/html-icon.png" />
              <span> HTML </span> 
            </div>

            <div className={this.state.category === "css" ? "category-radio selected" : "category-radio"} onClick={() => this.categoryChangeHandler("css")} > 
              <img src="/images/css-icon.png" />
              <span> CSS </span> 
            </div>

            <div className={this.state.category === "python" ? "category-radio selected" : "category-radio"} onClick={() => this.categoryChangeHandler("python")} > 
              <img src="/images/python-icon.png" />
              <span> Python </span> 
            </div>

            <div className={this.state.category === "Ruby" ? "category-radio selected" : "category-radio"} onClick={() => this.categoryChangeHandler("Ruby")} > 
              <img src="/images/Ruby-icon.png" />
              <span> Ruby </span> 
            </div>

            <div className={this.state.category === "Martial Arts" ? "category-radio selected" : "category-radio"} onClick={() => this.categoryChangeHandler("Martial Arts")} > 
              <span> 🥋 Martal Arts </span> 
            </div>

          </div>
          <input className="input-box duration-input" onChange={(evt) => this.metaChangeHandler(evt, 'duration')} type="number" placeholder="duration in minutes"/>
        </div>

        <div className="element-input-div-container" >
          {this.state.elements.map((element, i) => {

            const spacer = <div className="step-spacer"> <div/> </div>
            let needsSpacer = false

            if (i > 0 && element.type == 'heading') {
              needsSpacer = true
            }
          
            return (
              <>
                {needsSpacer && spacer}
                <div className="element-input-div" style={{display: "flex", flexDirection: "row"}}>
                  {this.renderElement(element, i)}
                  <div className="edit-element-div">
                    <div className="edit-element-button" onClick={() => this.positionChanger('up', i)}> Up </div>
                    <div className="edit-element-button" onClick={() => this.positionChanger('down', i)}> Down </div>
                    <div className="edit-element-button" onClick={() => this.deleteElementHandler(i)}> Delete</div>
                  </div>
                </div>
              </>
            ) 
          })}
        </div>
        
        <div className="add-element-button-div">
          <div className="add-element-button" onClick={() => this.addElementHandler("heading")}> 
            + Add step
          </div>

          <div className="add-element-button" onClick={() => this.addElementHandler("paragraph")} > 
            + Add paragraph
          </div>

          <div className="add-element-button" onClick={() => this.addElementHandler("link")} > 
            + Add link
          </div>

          <div className="add-element-button" onClick={() => this.addElementHandler("video")} > 
            + Add video
          </div>
        </div>

        <div className="submit-button" onClick={() => this.submitHandler()} > 
          Create Module
        </div>

      </div>
    )
  }
}

export default CreateModule
