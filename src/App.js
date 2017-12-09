import React, { Component } from 'react'
import './App.css'
import Switch from './components/Switch'

const compose = (...fns) => (...args) => fns.map(fn => fn && fn(...args))

class Toggle extends Component {
  static defaultProps = {
    onToggle: () => {},
  }

  state = { on: false }

  toggle = () => this.setState(({ on }) => ({ on: !on }))

  getTogglerProps = ({ onClick, className, ...props } = {}) => {
    return {
      onClick: compose(onClick, this.toggle),
      'aria-expanded': this.state.on,
      className: className ? `myToggle ${className}` : 'myToggle',
      ...props,
    }
  }

  render() {
    return this.props.render({
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
    })
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Toggle
          render={({ on, getTogglerProps }) => (
            <div>
              <p>toggle is {on ? 'on' : 'off'}</p>
              <Switch on={on} {...getTogglerProps()} />
              <hr />
              <button
                {...getTogglerProps({
                  onClick: () => console.log('object', on),
                  id: 'hah',
                  className: 'reddit',
                })}
              >
                {on ? 'on' : 'off'}
              </button>
            </div>
          )}
        />
      </div>
    )
  }
}

export default App
