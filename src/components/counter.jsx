import React, { Component } from 'react';

class Counter extends Component {
  state = {
    //created Object
    count: 0,
    //  tags: ['tag1', 'tag2', 'tag3'],
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleSetZero = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div style={{ marginLeft: 850, marginTop: 250 }}>
        <span className={this.getbadgerClasse()} style={{ fontSize: 20 }}>
          {this.formatcounter()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-lg"
        >
          Inc
        </button>
        <button
          onClick={this.handleSetZero}
          className="btn btn-danger ml-3 btn-lg"
        >
          Clear
        </button>
      </div>
    );
  }
  getbadgerClasse = () => {
    let classes = ' badge m-3 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  };
  formatcounter = () => {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count; //if statement
  };
}

export default Counter;
