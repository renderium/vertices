#include <stdlib.h>

typedef struct {
  short x;
  short y;
} Position;

typedef struct {
  unsigned short s;
  unsigned short t;
} Texture;

typedef struct {
  unsigned char r;
  unsigned char g;
  unsigned char b;
  unsigned char a;
} Color;

typedef struct {
  Position position;
  Position center;
  Texture texture;
  Color color;
  short theta;
  unsigned char linearGradient;
  unsigned char radialGradient;
} Vertex;

const size_t VERTEX_SIZE;

char* verticesCreate (unsigned int length);

void verticesRealloc (char* vertices, unsigned int length);

Vertex* verticesGet (char* vertices, unsigned int idx);

void verticesSetAlpha (Vertex* vertex, float alpha);

void verticesSetTheta (Vertex* vertex, float theta);
