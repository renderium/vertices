import Position from './position.js'
import Texture from './texture.js'
import Color from './color.js'

class Vertex {
  constructor (memory, byteOffset) {
    this.memory = memory
    this.byteOffset = byteOffset
    this.offset = byteOffset / 2
    this.position = new Position(memory, byteOffset)
    this.center = new Position(memory, this.position.byteOffset + this.position.SIZE)
    this.texture = new Texture(memory, this.center.byteOffset + this.center.SIZE)
    this.color = new Color(memory, this.texture.byteOffset + this.texture.SIZE)
  }

  get theta () {
    return this.memory.int16[this.offset + 8]
  }

  set theta (theta) {
    this.memory.int16[this.offset + 8] = theta
  }

  get linearGradient () {
    return this.memory.uint8[this.byteOffset + 18]
  }

  set linearGradient (linearGradient) {
    this.memory.uint8[this.byteOffset + 18] = linearGradient
  }

  get radialGradient () {
    return this.memory.uint8[this.byteOffset + 19]
  }

  set radialGradient (radialGradient) {
    this.memory.uint8[this.byteOffset + 19] = radialGradient
  }
}

Vertex.prototype.SIZE = Vertex.SIZE = 20

export default Vertex
