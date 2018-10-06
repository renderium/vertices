#include "vertices.h"

const size_t VERTEX_SIZE = sizeof(Vertex);

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
