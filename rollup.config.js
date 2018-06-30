import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    { file: pkg.umd, format: 'umd', name: 'Vertices' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ]
}