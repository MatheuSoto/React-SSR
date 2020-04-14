const purgecss = require('@fullhuman/postcss-purgecss')({ content: ['./src/**/*.js'], defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [] })
const cssnano = require('cssnano')({ preset: 'default' })
const autoprefixer = require('autoprefixer')
const tailwind = require('tailwindcss')('./src/browser/config/tailwind.config.js')

module.exports = {
  plugins:
  [
    autoprefixer(),
    tailwind,
    purgecss,
    cssnano
  ]
}
