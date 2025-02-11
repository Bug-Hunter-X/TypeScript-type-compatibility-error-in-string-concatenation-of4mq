function combine(a: string, b: number): string {
  return a + b.toString();
}

let result = combine("hello", 5); // Correctly concatenates string and number
console.log(result); // Output: hello5