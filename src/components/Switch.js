import React from 'react'
import './Switch.css'

const Switch = ({ on, className = '', ...props }) => (
  <div className="toggle">
    <input className="toggle-input" type="checkbox" />
    <button
      className={`${className} toggle-btn ${on ? 'toggle-btn-on' : 'toggle-btn-off'}`}
      aria-expanded={on}
      {...props}
    />
  </div>
)

export default Switch
