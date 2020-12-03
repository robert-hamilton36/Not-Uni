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

  fakeprops = {
    id: 3
  }

  render () {

    const { tags, suggestions } = this.state;

    return (
      <div className='create-module'>
        <input type="text" placeholder="title"/>
        <input type="text" placeholder="tags"/>

      </div>
    )
  }
}

export default CreateModule
