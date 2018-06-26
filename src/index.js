import Vertex from './vertex.js'

class Vertices {
  constructor (length = 0) {
    this.realloc(length)
  }

  set (buffer) {
    var length = buffer / this.BYTES_PER_ELEMENT
    for (var i = this.length; i < this.length; i++) {
      this[i] = new Vertex(this, this.BYTE_PER_ELEMENT * i)
    }
    this.length = length
    this.uint8 = new Uint8Array(buffer)
    this.int16 = new Int16Array(buffer)
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
