/**
 * Combines multiple callback functions into a single function that executes them sequentially.
 * When the returned function is called, it invokes each callback with the same arguments and `this` context.
 * If any callback throws an error, the error is logged to the console, but execution continues for remaining callbacks.
 * 
 * @template T - The type of the `this` context
 * @template A - The tuple type for arguments
 * @param callbacks - An iterable collection of callback functions to merge
 * @returns A function that executes all callbacks sequentially
 * 
 * @example
 * ```typescript
 * const callback1 = (x: number) => console.log('First:', x);
 * const callback2 = (x: number) => console.log('Second:', x);
 * 
 * const combined = mergeCallbacks([callback1, callback2]);
 * combined(42); // Logs "First: 42" followed by "Second: 42"
 * ```
 */
export default function mergeCallbacks<T, A extends any[]>(callbacks: Iterable<(this: T, ...args: A) => void>): (this: T, ...args: A) => void {
	return function (...args: A) {
		for (const callback of callbacks) {
			try {
				callback.apply(this, args);
			} catch (error) {
				console.error(error)
			}
		}
	};
}