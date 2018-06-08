import alias from 'rollup-plugin-alias'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

import pkg from './package.json'

export default {
  input: 'index.js',
  output: [
    {
      file: pkg.browser,
      format: 'cjs',
      sourceMap: true
    }
  ],
  plugins: [
    // intended functionality is to replace any "import 'ow'" statements
    // with "import 'ow-shim'" and have it just work.
    alias({
      'ow': 'ow-shim'
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      browser: true
    }),
    commonjs()
  ]
}
