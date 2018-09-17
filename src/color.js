class Color {
  constructor (memory, byteOffset) {
    this.memory = memory
    this.byteOffset = byteOffset
    this.offset = byteOffset
  }

  get r () {
    return this.memory.uint8[this.offset]
  }

  set r (r) {
    this.memory.uint8[this.offset] = r
  }

  get g () {
    return this.memory.uint8[this.offset + 1]
  }

  set g (g) {
    this.memory.uint8[this.offset + 1] = g
  }

  get b () {
    return this.memory.uint8[this.offset + 2]
  }

  set b (b) {
    this.memory.uint8[this.offset + 2] = b
  }

  get a () {
    return this.memory.uint8[this.offset + 3] / 0xff
  }

  set a (a) {
    this.memory.uint8[this.offset + 3] = a * 0xff
  }
}

Color.prototype.SIZE = Color.SIZE = 4

export default Color
