import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push('/about');
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Next
        </button>
      </div>
    );
  }
}

export default Button;