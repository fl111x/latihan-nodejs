import { readFileSync } from 'node:fs';

// macOS, Linux, and Windows
console.log(readFileSync('./package.json'))
// => [Error: EISDIR: illegal operation on a directory, read <directory>]
