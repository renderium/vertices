#include "vertices.h"

const size_t VERTEX_SIZE = sizeof(Vertex);
const float TWO_PI = 6.283185307179586f;

char* verticesCreate (unsigned int length) {
  return (char *)calloc(length, VERTEX_SIZE);
}

void verticesRealloc (char* vertices, unsigned int length) {
  realloc(vertices, length * VERTEX_SIZE);
}

Vertex* verticesGet (char* vertices, unsigned int idx) {
  Vertex* vertex = vertices + idx * VERTEX_SIZE;
  return vertex;
}

void verticesSetAlpha (Vertex* vertex, float alpha) {
  vertex->color.a = (unsigned char)(alpha * 0xff); 
}

void verticesSetTheta (Vertex* vertex, float theta) {
  vertex->theta = (short)(fmod(theta, TWO_PI) / TWO_PI * 0x7fff);
}
