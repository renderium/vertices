class Position {
  constructor (memory, byteOffset) {
    this.memory = memory;
    this.byteOffset = byteOffset;
    this.offset = byteOffset / 2;
  }

  get x () {
    return this.memory.int16[this.offset]
  }

  set x (x) {
    this.memory.int16[this.offset] = x;
  }

  get y () {
    return this.memory.int16[this.offset + 1]
  }

  set y (y) {
    this.memory.int16[this.offset + 1] = y;
  }
}

Position.prototype.SIZE = Position.SIZE = 4;

class Texture {
  constructor (memory, byteOffset) {
    this.memory = memory;
    this.byteOffset = byteOffset;
    this.offset = byteOffset / 2;
  }

  get s () {
    return this.memory.uint16[this.offset]
  }

  set s (s) {
    this.memory.uint16[this.offset] = s;
  }

  get t () {
    return this.memory.uint16[this.offset + 1]
  }

  set t (t) {
    this.memory.uint16[this.offset + 1] = t;
  }
}

Texture.prototype.SIZE = Texture.SIZE = 4;

class Color {
  constructor (memory, byteOffset) {
    this.memory = memory;
    this.byteOffset = byteOffset;
    this.offset = byteOffset;
  }

  get r () {
    return this.memory.uint8[this.offset]
  }

  set r (r) {
    this.memory.uint8[this.offset] = r;
  }

  get g () {
    return this.memory.uint8[this.offset + 1]
  }

  set g (g) {
    this.memory.uint8[this.offset + 1] = g;
  }

  get b () {
    return this.memory.uint8[this.offset + 2]
  }

  set b (b) {
    this.memory.uint8[this.offset + 2] = b;
  }

  get a () {
    return this.memory.uint8[this.offset + 3]
  }

  set a (a) {
    this.memory.uint8[this.offset + 3] = a;
  }
}

Color.prototype.SIZE = Color.SIZE = 4;

class Vertex {
  constructor (memory, byteOffset) {
    this.memory = memory;
    this.byteOffset = byteOffset;
    this.offset = byteOffset / 2;
    this.position = new Position(memory, byteOffset);
    this.center = new Position(memory, this.position.byteOffset + this.position.SIZE);
    this.texture = new Texture(memory, this.center.byteOffset + this.center.SIZE);
    this.color = new Color(memory, this.texture.byteOffset + this.texture.SIZE);
  }

  get theta () {
    return this.memory.int16[this.offset + 8]
  }

  set theta (theta) {
    this.memory.int16[this.offset + 8] = theta;
  }

  get gradientId () {
    return this.memory.uint16[ this.offset + 9 ]
  }

  set gradientId (gradientId) {
    this.memory.int16[this.offset + 9] = gradientId;
  }
}

Vertex.prototype.SIZE = Vertex.SIZE = 20;

class Vertices {
  constructor (length = 0) {
    this.length = 0;
    this.set(new ArrayBuffer(length * this.BYTES_PER_ELEMENT));
  }

  set (buffer) {
    var size = this.BYTES_PER_ELEMENT;
    var length = buffer.length / size;

    this.buffer = buffer;
    this.uint8 = new Uint8Array(buffer);
    this.uint16 = new Uint16Array(buffer);
    this.int16 = new Int16Array(buffer);

    for (var i = this.length; i < length; i++) {
      this[i] = new Vertex(this, size * i);
    }

    this.length = length;
  }

  realloc (length) {
    var array = this.uint8;
    var buffer = new ArrayBuffer(length * this.BYTES_PER_ELEMENT);
    this.set(buffer);
    this.uint8.set(array);
  }

  get BYTES_PER_ELEMENT () {
    return Vertex.SIZE
  }
}

export default Vertices;
