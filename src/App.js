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
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      togglerProps: {
        onClick: this.toggle,
        'aria-expanded': this.state.on,
      },
    })
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Toggle
          render={({ on, togglerProps }) => (
            <div>
              <p>toggle is {on ? 'on' : 'off'}</p>
              <Switch on={on} {...togglerProps} />
              <hr />
              <button {...togglerProps}>{on ? 'on' : 'off'}</button>
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
