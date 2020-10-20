import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevStates) {
    console.log("prevProps ", prevProps);
    console.log("prevState ", prevStates);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Make backend call.
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.buttonStyling()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  buttonStyling() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}
