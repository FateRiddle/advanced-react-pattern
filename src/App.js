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

const App = () => <Toggle onToggle={on => console.log('toggle', on)} />

export default App
