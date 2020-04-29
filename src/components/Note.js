import React, { Component } from 'react';

export class Note extends Component {
  render() {
    return <div className="note">{this.props.note.text}</div>;
  }
}

export default Note;
