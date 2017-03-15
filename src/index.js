import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './screens/Root'

render(
    <Root />
  , document.getElementById('root')
)