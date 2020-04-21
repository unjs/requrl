import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

const extensions = ['.js', '.ts', '.tsx']

export default [
  {
    input: './src/requrl.ts',
    output: { file: './dist/requrl.js', format: 'cjs' },
    plugins: [
      resolve({ extensions }),
      commonjs(),
      babel({
        extensions,
        presets: [
          '@babel/preset-typescript',
          ['@babel/preset-env', {
            targets: {
              ie: 9
            }
          }]
        ]
      })
    ]
  }
]
