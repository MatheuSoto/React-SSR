import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import template from '../browser/template'
import App from '../browser/App'

const app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
  const body = renderToString(<App />)
  res.send(template({
    body,
    title: 'Cuenta Cuy App'
  }))
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening http://localhost:${process.env.PORT || 3000}`)
})
