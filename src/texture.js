class Texture {
  constructor (memory, byteOffset) {
    this.memory = memory
    this.byteOffset = byteOffset
    this.offset = byteOffset / 2
  }

  get s () {
    return this.memory.uint16[this.offset]
  }

  set s (s) {
    this.memory.uint16[this.offset] = s
  }

  get t () {
    return this.memory.uint16[this.offset + 1]
  }

  set t (t) {
    this.memory.uint16[this.offset + 1] = t
  }
}

Texture.prototype.SIZE = Texture.SIZE = 4

export default Texture
