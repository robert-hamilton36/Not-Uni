import React, { Component } from 'react'
import { connect } from 'react-redux'


const Module = (props) => {


  
  const currentModule = props.modules
  .find((module) => module.id == props.match.params.id)
  
  // Wanted to make the step numbers going up in value @oli need to know more about how your funcation works. 

  // const numberonStep = (i)=> {
  //   for (i = 1, i > numberonStep.content.content, i++ ) {
  //   }
  //   return(
  //   console.log(i)
  //   )
  // } 
  
  return (

    currentModule ? <div className = 'module' >
      {/* <h1>Module View</h1> */}


      <div className='h-module' >
        <h1> {currentModule.title} </h1>
        <h5> {currentModule.duration} mins</h5>
      </div>



      {/* {console.log(props.modules)} */}
      {/* {console.log(currentModule)} */}

    <div className="B-I-module">

      {currentModule.elements.map((item) => {
        switch (item.type) {
          case "heading":
        return <h3> {item.content} </h3>

          case "paragraph":
            return <p> {item.content} </p>

          case "link":
            return (
              <a href={item.content}>
                <div className = 'text'>Click here </div>
              </a>
            )
          case "video":
            return (
              <iframe width="560" height="315" src={item.content} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            )
        }
      })}
      </div>

    </div> : ""
  )

}


function mapStateToProps(globalState) {
  return {
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(Module)
