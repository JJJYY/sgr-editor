const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const rollup = require('rollup')
const flow = require('rollup-plugin-flow')
const babel = require('rollup-plugin-babel')
const resolve = require('rollup-plugin-node-resolve')
const { eslint } = require('rollup-plugin-eslint')

const rollupConfig = {
  input: 'src/index.js',
  plugins: [
    eslint({
      exclude: [ 'node_modules/**', 'dist/**' ]
    }),
    flow(),
    babel({
      include: 'src/**/*.js'
    }),
    resolve({
      module: true
    })
  ],
  output: {
    file: 'dist/sgr-editor.js',
    format: 'umd',
    strict: true,
    name: 'SgrEditor'
  }
}

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

function build (config) {
  const output = config.output
  const { file } = output
  return rollup.rollup(config)
    .then(bundle => bundle.generate(output))
    .then(({ code }) => {
      write(file, code)
    })
}

function write (dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report (extra) {
      console.log(chalk.blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }

    fs.writeFile(dest, code, err => {
      if (err) return reject(err)
      report()
    })
  })
}

function getSize (code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

module.exports = () => build(rollupConfig)
