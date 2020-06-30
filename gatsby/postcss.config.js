/** @format */

const tailwindcss = require('tailwindcss')
const easyImport = require('postcss-easy-import')
const nested = require('postcss-nested')
const customProperties = require('postcss-custom-properties')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')

const plugins = []
// plugins.push(tailwindcss);
plugins.push(tailwindcss('tailwind.config.js'))
// This is if you want to include your custom config
plugins.push(easyImport)
plugins.push(nested)
plugins.push(customProperties)
plugins.push(autoprefixer)
plugins.push(cssnano)

module.exports = {plugins}
