// Global type utilities for TypeScript

/**
 * Overwrite utility type
 * Allows properties from B to override properties in A
 */
type Overwrite<A, B> = Omit<A, keyof B> & B;

/**
 * Distributive omit utility type
 * Distributes over union types unlike the built-in Omit
 */
type DistributiveOmit<T, K extends keyof any> = T extends any
	? Omit<T, K>
	: never;
