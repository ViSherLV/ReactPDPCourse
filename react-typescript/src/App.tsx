import React, { Component } from 'react';

type CounterState = {
  readonly count: number
}

type CounterProps = {
  readonly title?: string,

}
class Counter extends Component<CounterProps, CounterState> {


  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: 0
    }
  }

  // static getDerivedStateFromProps(props: CounterProps, state: CounterState): CounterState | null {
  //   return true ? { count: 3 } : null;
  // }

  componentDidMount(): void {

  }
  shouldComponentUpdate(nextProps: CounterProps, nextState: CounterState): boolean {
    return true

  }

  handleClick = () => {
    this.setState(
      ({ count }) => ({
        count: ++count
      })
    )
  };
  render() {
    return (
      <div>
        <h1>{this.props.title}{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
  }

}

const App = () => <Counter title="This title" />

export default App;