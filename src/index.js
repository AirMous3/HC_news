import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import React from 'react'
import ReactDOM from 'react-dom'

import { App } from '@/App'
import 'antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter basename="news">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
