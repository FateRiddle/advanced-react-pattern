import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Switch from './components/Switch'

const TOGGLE_CONTEXT = '__toggle__'

const ToggleOn = ({ children }, context) => {
  const { on } = context[TOGGLE_CONTEXT]
  return on ? children : null
}
ToggleOn.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}
const ToggleOff = ({ children }, context) => {
  const { on } = context[TOGGLE_CONTEXT]
  return on ? null : children
}
ToggleOff.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}
const ToggleButton = (props, context) => {
  const { on, toggle } = context[TOGGLE_CONTEXT]
  return <Switch on={on} onClick={toggle} {...props} />
}
ToggleButton.contextTypes = {
  [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
}

class Toggle extends Component {
  static On = ToggleOn
  static Off = ToggleOff
  static Button = ToggleButton
  static defaultProps = { onToggle: () => {} }
  static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
  }
  state = { on: false }

  getChildContext = () => ({
    [TOGGLE_CONTEXT]: {
      on: this.state.on,
      toggle: this.toggle,
    },
  })

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on)
      }
    )

  render() {
    return <div>{this.props.children}</div>
  }
}

class App extends Component {
  render() {
    return (
      <Toggle onToggle={on => console.log('toggle is', on)}>
        <p>
          <Toggle.On>The button is on</Toggle.On>
          <Toggle.Off>The button is off</Toggle.Off>
        </p>
        <div>
          <Toggle.Button />
        </div>
      </Toggle>
    )
  }
}

export default App
