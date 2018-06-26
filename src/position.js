class Position {
  constructor (memory, byteOffset) {
    this.memory = memory
    this.byteOffset = byteOffset
    this.offset = byteOffset / 2
  }

  get x () {
    return this.memory.int16[ this.offset ]
  }

  set x (x) {
    this.memory.int16[ this.offset ] = x
  }

  get y () {
    return this.memory.int16[ this.offset + 1 ]
  }

  set y (y) {
    this.memory.int16[ this.offset + 1 ] = y
  }
}

Position.prototype.SIZE = Position.SIZE = 4

export default Position
