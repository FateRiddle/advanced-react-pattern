import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'tachyons/css/tachyons.min.css'
import './index.css'

const render = () =>
  ReactDOM.render(
    <div className="mt6 flex justify-center flex-column tc">
      <App />
    </div>,
    document.getElementById('root')
  )

if (module.hot) {
  module.hot.accept('./App', render)
}

render()
