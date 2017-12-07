import React, { Component } from 'react'
import './Switch.css'

export default class Switch extends Component {
  static defaultProps = {
    on: false,
    onClick: () => {},
  }

  render() {
    const { on, onClick } = this.props
    return (
      <div className="flex h5 justify-center items-center ">
        <label className="switch">
          <input type="checkbox" checked={on} onChange={onClick} />
          <span className="slider round" />
        </label>
      </div>
    )
  }
}
