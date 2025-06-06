# merge-callbacks
Merge multiple callback functions into a single function that calls all of them in sequence.

[![npm](https://img.shields.io/npm/v/merge-callbacks.svg)](https://www.npmjs.com/package/merge-callbacks)

```ts
import mergeCallbacks from 'merge-callbacks'

const callback1 = (x: number) => console.log('First:', x)
const callback2 = (x: number) => console.log('Second:', x)

const combined = mergeCallbacks([callback1, callback2])
combined(42); // Logs "First: 42" followed by "Second: 42"
```