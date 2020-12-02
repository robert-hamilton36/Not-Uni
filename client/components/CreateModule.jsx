import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
// import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: 13,
};
 
const delimiters = [KeyCodes.comma, KeyCodes.enter];

class CreateModule extends React.Component {

  state = {
    tags: [
      { id: "Thailand", text: "Thailand" },
      { id: "India", text: "India" }
    ],
    suggestions: [
      { id: 'USA', text: 'USA' },
      { id: 'Germany', text: 'Germany' },
      { id: 'Austria', text: 'Austria' },
      { id: 'Costa Rica', text: 'Costa Rica' },
      { id: 'Sri Lanka', text: 'Sri Lanka' },
      { id: 'Thailand', text: 'Thailand' }
    ]  
  }

  fakeprops = {
    id: 3
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
     tags: tags.filter((tag, index) => index !== i),
    });
}

handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
}

handleDrag(tag, currPos, newPos) {
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
}

  render () {

    const { tags, suggestions } = this.state;

    return (
      <div className='create-module'>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="tags"/>
        {/* <ReactTags  
          tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}
          delimiters={delimiters} /> */}
      </div>
    )
  }
}

export default CreateModule
