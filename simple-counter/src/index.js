import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.scss';

class Counter extends Component {
  state = { counter: 0 };

  render() {
    const { counter } = this.state;
    return (
      <main className="Counter">
        <p className="count">{counter}</p>
        <section className="controls">
          <button onClick={() => this.setState(this.props.onIncrement)}>
            Increment
          </button>
          <button onClick={() => this.setState({ counter: counter - 1 })}>
            Decrement
          </button>
          <button onClick={() => this.setState({ counter: 0 })}>Reset</button>
        </section>
      </main>
    );
  }
}

render(
  <Counter onIncrement={state => ({ counter: state.counter + 500 })} />,
  document.getElementById('root'),
);
