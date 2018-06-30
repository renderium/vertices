var test = require('tape')
var tapDiff = require('tap-diff')
var Vertices = require('../dist/vertices.cjs.js')

test.createStream()
  .pipe(tapDiff())
  .pipe(process.stdout)

test('.constructor()', t => {
  var vertices = new Vertices(3)
  t.ok(vertices instanceof Vertices, 'should create vertices instance')
  t.equal(vertices.length, 3, 'should setup length')
  t.equal(vertices.buffer.byteLength, 60, 'should setup buffer')
  t.equal(vertices.uint8.length, 60, 'should setup uint8 view')
  t.equal(vertices.uint16.length, 30, 'should setup uint16 view')
  t.equal(vertices.int16.length, 30, 'should setup int16 view')

  for (var i = 0; i < vertices.length; i++) {
    t.ok(vertices[i], `should setup vertex at index ${i}`)
  }
  t.end()
})

test('[index]', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  t.ok(vertex, 'shoud return vertex')
  t.end()
})

test('[index].position', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  var int16 = new Int16Array(vertices.buffer)
  int16[10] = 10
  int16[11] = 20
  t.equal(vertex.position.x, 10, '.x should read from memory')
  t.equal(vertex.position.y, 20, '.y should read from memory')
  vertex.position.x = 20
  vertex.position.y = 10
  t.equal(int16[10], 20, '.x should write to memory')
  t.equal(int16[11], 10, '.y should write to memory')
  t.end()
})

test('[index].center', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  var int16 = new Int16Array(vertices.buffer)
  int16[12] = 10
  int16[13] = 20
  t.equal(vertex.center.x, 10, '.x should read from memory')
  t.equal(vertex.center.y, 20, '.y should read from memory')
  vertex.center.x = 20
  vertex.center.y = 10
  t.equal(int16[12], 20, '.x should write to memory')
  t.equal(int16[13], 10, '.y should write to memory')
  t.end()
})

test('[index].texture', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  var uint16 = new Uint16Array(vertices.buffer)
  uint16[14] = 10
  uint16[15] = 20
  t.equal(vertex.texture.s, 10, '.s should read from memory')
  t.equal(vertex.texture.t, 20, '.t should read from memory')
  vertex.texture.s = 20
  vertex.texture.t = 10
  t.equal(uint16[14], 20, '.s should write to memory')
  t.equal(uint16[15], 10, '.t should write to memory')
  t.end()
})

test('[index].color', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  var uint8 = new Uint8Array(vertices.buffer)
  uint8[32] = 10
  uint8[33] = 20
  uint8[34] = 30
  uint8[35] = 40
  t.equal(vertex.color.r, 10, '.r should read from memory')
  t.equal(vertex.color.g, 20, '.g should read from memory')
  t.equal(vertex.color.b, 30, '.b should read from memory')
  t.equal(vertex.color.a, 40, '.a should read from memory')
  vertex.color.r = 40
  vertex.color.g = 30
  vertex.color.b = 20
  vertex.color.a = 10
  t.equal(uint8[32], 40, '.r should write to memory')
  t.equal(uint8[33], 30, '.g should write to memory')
  t.equal(uint8[34], 20, '.b should write to memory')
  t.equal(uint8[35], 10, '.a should write to memory')
  t.end()
})

test('[index].theta', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  var int16 = new Int16Array(vertices.buffer)
  int16[18] = 0xffff / 2 | 0
  t.equal(vertex.theta, 32767, 'should read from memory')
  vertex.theta = 0
  t.equal(int16[18], 0, 'should write to memory')
  t.end()
})

test('[index].gradientId', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[1]
  var uint16 = new Uint16Array(vertices.buffer)
  uint16[19] = 1
  t.equal(vertex.gradientId, 1, 'should read from memory')
  vertex.gradientId = 2
  t.equal(uint16[19], 2, 'should write to memory')
  t.end()
})

test('.realloc()', t => {
  var vertices = new Vertices(3)
  var vertex = vertices[2]
  vertex.color.r = 255
  vertices.realloc(4)
  t.equal(vertices.buffer.byteLength, 80, 'should increase buffer size')
  t.ok(vertices[3], 'should create new vertices')
  t.equal(vertices[2], vertex, 'shouldn`t recreate existed vertices')
  t.equal(vertex.color.r, 255, 'should copy existed memory')
  t.end()
})
