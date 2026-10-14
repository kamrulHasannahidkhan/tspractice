function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(val: unknown) {
  if (isString(val)) {
    console.log(val.toUpperCase()); // TypeScript knows val is a string here
  }
}