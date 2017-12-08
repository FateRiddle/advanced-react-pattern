import React, { Component } from 'react'
import './App.css'
import Switch from './components/Switch'

class Toggle extends Component {
  static defaultProps = {
    onToggle: () => {},
  }

  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }))

  render() {
    return this.props.renderSwitch({
      on: this.state.on,
      onClick: this.toggle,
    })
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Toggle
          renderSwitch={({ on, onClick }) => (
            <div>
              <p>toggle is {on ? 'on' : 'off'}</p>
              <Switch on={on} onClick={onClick} />
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
