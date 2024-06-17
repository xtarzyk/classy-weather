import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = { count: 0 }
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleDecrement = this.handleIncrement.bind(this)
  }

  handleDecrement() {
    this.setState(curState => ({ count: curState.count - 1 }))
  }

  handleIncrement() {
    this.setState(curState => ({ count: curState.count + 1 }))
  }

  render() {
    return <div>
      <button onClick={this.handleDecrement}>-</button>
      <span>
        {this.state.count}
      </span>
      <button onClick={this.handleIncrement}>+</button>
    </div>
  }
}

export default Counter