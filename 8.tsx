interface Point {
  readonly x: number;
  readonly y: number;
}

const p: Point = { x: 10, y: 20 };
// p.x = 15; // Error: Cannot assign to 'x' because it is a read-only property.