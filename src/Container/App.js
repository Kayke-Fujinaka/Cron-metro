import React, { Component } from 'react';
import './styles.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      btn: 'Iniciar'
    };

    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);

  }

  start() {

    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null
      state.btn = 'Iniciar'
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.number += 0.1
        this.setState(state)
      }, 100)
      state.btn = 'Pausar'
    }
    this.setState(state);
  }

  clear() {

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null
    }

    let state = this.state;
    state.number = 0;
    state.btn = 'Iniciar'
    this.setState(state);

  }

  render() {
    return (
      <>
        <div className='container'>
          <img className='img' src={require('../assets/cronometro.png')} />
          <a className='timer'>{this.state.number.toFixed(1)}</a>
          <div className='btnArea'>
            <button className='btn' onClick={this.start}>{this.state.btn}</button>
            <button className='btn' onClick={this.clear}>Limpar</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;