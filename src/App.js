import React, { Component } from 'react'
import './App.css'
import Switch from './components/Switch'

class Toggle extends Component {
  static defaultProps = {
    onToggle: () => {},
  }

  state = { on: false }

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )

  render() {
    const { on } = this.state
    return <Switch on={on} onClick={this.toggle} />
  }
}

class App extends Component {
  state = { on: false }
  render() {
    return (
      <div>
        <Toggle onToggle={on => this.setState({ on: on })} />
        <div className="mv3">the toggle is {this.state.on ? 'on' : 'off'}</div>
      </div>
    )
  }
}

export default App
