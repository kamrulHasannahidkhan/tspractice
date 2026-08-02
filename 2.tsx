function greet(name: string, greeting: string = "Hello", title?: string): string {
  const titlePart = title ? `${title} ` : "";
  return `${greeting}, ${titlePart}${name}!`;
}

console.log(greet("Alice")); // Hello, Alice!
console.log(greet("Bob", "Hi", "Dr.")); // Hi, Dr. Bob!