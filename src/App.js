import React, { Component } from 'react'
import './App.css'
import Switch from './components/Switch'

const ToggleOn = ({ on, children }) => (on ? children : null)
const ToggleOff = ({ on, children }) => (on ? null : children)
const ToggleButton = ({ on, toggle, ...rest }) => (
  <Switch on={on} onClick={toggle} {...rest} />
)

class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton
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
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    )
    return <div>{children}</div>
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Toggle onToggle={on => console.log('toggle is', on)}>
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
          <Toggle.Button />
        </Toggle>
      </div>
    )
  }
}

export default App
