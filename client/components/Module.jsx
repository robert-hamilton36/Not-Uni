import React from 'react'
import { connect } from 'react-redux'
import { ReactTinyLink } from "react-tiny-link";




class Module extends React.Component {

  state = {
    currentModule: null
  }



  // this needs fixing from ross
  // for some reason i can't figure out how to set state on line 24/26 AFTER global state has loaded in
  componentDidMount () {
    console.log(this.props.modules);

    setTimeout(() => {
      console.log(this.props.modules);

      let currentModule = this.props.modules.find((module) => module.id == this.props.match.params.id)
  
      this.setState({currentModule})
    }, 1000);
  }
  
  


  // Wanted to make the step numbers going up in value @oli need to know more about how your funcation works. 

  // const numberonStep = (i)=> {
  //   for (i = 1, i > numberonStep.content.content, i++ ) {
  //   }
  //   return(
  //   console.log(i)
  //   )
  // } 
  
  render () {
    return (
  
      this.state.currentModule ? <div className = 'module' >
        {/* <h1>Module View</h1> */}
  
  
        <div className='h-module' >
          <h1> {this.state.currentModule.title} </h1>
          <h5> {this.state.currentModule.duration} mins</h5>
        </div>
  
  
  
        {/* {console.log(this.props.modules)} */}
        {/* {console.log(this.state.currentModule)} */}
  
      <div className="B-I-module">
  
        {this.state.currentModule.elements.map((item) => {
          switch (item.type) {
            case "heading":
          return <h3> {item.content} </h3>
  
            case "paragraph":
              return <p> {item.content} </p>
  
            case "link":
              return (
                <div className="react-tiny-link">
                  <ReactTinyLink
                    cardSize="small"
                    showGraphic={true}
                    maxLine={2}
                    minLine={1}
                    url={item.content}
                  />
                </div>
              )
            case "video":
              return (
                <div className="video-container">
                  <iframe 
                    height="auto"
                    src={item.content} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                  </iframe>
                </div>
              )
          }
        })}
        </div>
  
      </div> : ""
    )

  }

}


function mapStateToProps(globalState) {
  return {
    modules: globalState.modules
  }
}
export default connect(mapStateToProps)(Module)
