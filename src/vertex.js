import Position from './position.js'
import Texture from './texture.js'
import Color from './color.js'

class Vertex {
  constructor (memory, byteOffset) {
    this.memory = memory
    this.byteOffset = byteOffset
    this.position = new Position(memory, byteOffset)
    this.center = new Position(memory, this.position.byteOffset + this.position.SIZE)
    this.texture = new Texture(memory, this.center.byteOffset + this.center.SIZE)
    this.color = new Color(memory, this.texture.byteOffset + this.texture.SIZE)
  }

  get theta () {
    return this.memory.int16[this.byteOffset / 2 + 8]
  }

  set theta (theta) {
    this.memory.int16[this.byteOffset / 2 + 8] = theta
  }

  get gradientId () {
    return this.memory.uint16[ this.byteOffset / 2 + 9 ]
  }

  set gradientId (gradientId) {
    this.memory.int16[this.byteOffset / 2 + 9] = gradientId
  }
}

Vertex.prototype.SIZE = Vertex.SIZE = 20

export default Vertex
