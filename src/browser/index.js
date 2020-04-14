import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import './assets/css/styles.css'

hydrate(<App />, document.getElementById('app'))
