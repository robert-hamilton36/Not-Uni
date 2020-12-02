import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class Module extends React.Component {
  fakeProps = {
    id: 4,
    author: "Jesus Christ",
    title: "React Basics",
    duration: "3 hours",
    difficulty: "Novice",
    elements: [
      {
        type: "heading",
        content: "How to set up React"
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas accusamus autem ipsa inventore nulla molestias, est, sequi laudantium vitae odio fuga maxime doloribus incidunt libero illum deleniti architecto illo."
      },
      {
        type: "external-link",
        content: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76"
      },
      {
        type: "video",
        content: "https://www.youtube.com/embed/egUtw5pumYg"
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas accusamus autem ipsa inventore nulla molestias, est, sequi laudantium vitae odio fuga maxime doloribus incidunt libero illum deleniti architecto illo."
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas accusamus autem ipsa inventore nulla molestias, est, sequi laudantium vitae odio fuga maxime doloribus incidunt libero illum deleniti architecto illo."
      },
      {
        type: "external-link",
        content: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76"
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptas accusamus autem ipsa inventore nulla molestias, est, sequi laudantium vitae odio fuga maxime doloribus incidunt libero illum deleniti architecto illo."
      },
      {
        type: "external-link",
        content: "https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76"
      },
    ]
    
  }

  render () {
    return (
      <div className="module">

        {this.fakeProps.blocks.map((item) => {
          switch (item.type) {
            case "heading":
              return <h3> {item.content} </h3>

            case "paragraph":
              return <p> {item.content} </p>

            case "external-link":
              return (
                <a href={item.content}>
                  <div>Click here </div>
                </a>
              )

            case "video":
              return (
                <iframe width="560" height="315" src={item.content} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              )
          }
        })}

      </div> 
    )
  }
}

export default Module
