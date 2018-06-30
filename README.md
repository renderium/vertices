<h1 align="center">Vertices</h1>
<h4 align="center">Vertices for renderium</h4>
<p align="center">
  <a href="https://www.npmjs.com/package/@renderium/vertices" target="_blank">
    <img src="https://img.shields.io/npm/v/renderium/vertices.svg" alt="NPM version" target="_blank"></img>
  </a>
  <a href="https://travis-ci.org/renderium/vertices" target="_blank">
    <img src="https://travis-ci.org/renderium/vertices.svg?branch=master" alt="Build Status" target="_blank"></img>
  </a>
  <a href='https://coveralls.io/github/renderium/vertices?branch=master'>
    <img src='https://coveralls.io/repos/github/renderium/vertices/badge.svg?branch=master' alt='Coverage Status' />
  </a>
  <a href="https://github.com/feross/standard" target="_blank">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat" alt="js-standard-style"/>
  </a>
</p>

## Install

```
npm install --save @renderium/vertices
```

or download [dev](https://unpkg.com/@renderium/vertices/dist/vertices.umd.js) or [prod](https://unpkg.com/@renderium/vertices/dist/vertices.min.js) version

## Usage

```js
// create vertices
var vertices = new Vertices(0xff)

// write data
var vertex = vertices[128]
vertex.position.x = 10
vertex.color.a = 255

// push buffer to webgl
gl.bufferSubData(gl.ARRAY_BUFFER, 0, vertices.buffer)
```

## Development

Command | Description
------- | -----------
`npm run check` | Check standard code style by [snazzy](https://www.npmjs.com/package/snazzy)
`npm run build` | Wrap source code in [UMD](https://github.com/umdjs/umd) by [rollup](http://rollupjs.org/)
`npm run test` | Run tests by [tape](https://github.com/substack/tape) and compute code coverage by [nyc](https://github.com/bcoe/nyc)
`npm run min` | Minify code by [UglifyJS2](https://github.com/mishoo/UglifyJS2)