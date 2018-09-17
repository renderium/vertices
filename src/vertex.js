import Position from './position.js'
import Texture from './texture.js'
import Color from './color.js'

const TWO_PI = 2 * Math.PI

// 0x7fff largest number that could be written to Int16Array
// represent 2Pi in binary data

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
    return this.memory.int16[this.offset + 8] / 0x7fff * TWO_PI
  }

  set theta (theta) {
    this.memory.int16[this.offset + 8] = (theta % TWO_PI) / TWO_PI * 0x7fff
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
