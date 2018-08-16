import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm'>Increment</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    return classes += (this.state.count === 0) ? "warning" : "primary";
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
