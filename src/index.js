import React from 'react'
import ReactDOM from 'react-dom'
import { setup } from 'goober'

import GlobalStyles from './GlobalStyles'
import App from './App'

setup(React.createElement)

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
