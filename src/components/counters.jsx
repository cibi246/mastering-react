import React, { Component } from "react";
import Counter from "./counter";
import "bootstrap/dist/css/bootstrap.css";

class Counters extends Component {
  constructor() {
    super();
    console.log("App - Constructor");
  }

  componentDidMount() {
    //AJAX or backend calls
    console.log("App - ComponentDidMount");
  }

  render() {
    console.log("App - render");
    const {
      onReset,
      onDelete,
      onIncrement,
      onDecrement,
      counters,
    } = this.props;
    return (
      <div className="container">
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <div key={counter.id}>
            <Counter
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
