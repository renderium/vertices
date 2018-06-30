import Vertex from './vertex.js'

class Vertices {
  constructor (length) {
    this.length = 0
    this.set(new ArrayBuffer(length * this.BYTES_PER_ELEMENT))
  }

  set (buffer) {
    var size = this.BYTES_PER_ELEMENT
    var length = buffer.byteLength / size

    this.buffer = buffer
    this.uint8 = new Uint8Array(buffer)
    this.uint16 = new Uint16Array(buffer)
    this.int16 = new Int16Array(buffer)

    for (var i = this.length; i < length; i++) {
      this[i] = new Vertex(this, size * i)
    }

    this.length = length
  }

  realloc (length) {
    var array = this.uint8
    var buffer = new ArrayBuffer(length * this.BYTES_PER_ELEMENT)
    this.set(buffer)
    this.uint8.set(array)
  }

  get BYTES_PER_ELEMENT () {
    return Vertex.SIZE
  }
}

export default Vertices
