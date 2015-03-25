import React from 'react';

export default class BufferView extends React.Component {
  current() {
    return this.props.buffers.current();
  }

  logElement(log) {
    return (
      <li>
        <div>{log.datetime.toString()}</div>
        <div>{log.nick}</div>
        <div>{log.text}</div>
      </li>
    );
  }

  render() {
    return (
      <div id='buffer-view'>
        <ul>
          {this.current().logs.map(this.logElement)}
        </ul>
      </div>
    );
  }
}