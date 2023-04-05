import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  componentDidUpdate(prevProps, prevState){
      console.log(prevProps);
      console.log(prevState);
      if(prevProps.counter.value !== this.props.counter.value){
          //ajax call get new data fom server
      }
  }

  componentWillUnmount(){
      console.log('counter-unmount');
  };

  render() {
    console.log('counter-rendered');
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return (
      <div>
        <span style={{ fontSize: 15 }} className={classes}>
          {this.formatCount()}
        </span>
        <button
          style={{ marginRight: "8px" }}
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.handleIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          style={{ marginRight: "8px" }}
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.handleDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
          style={{ marginRight: "8px" }}
          className="btn btn-danger btn-sm"
          onClick={() => this.props.handleDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
