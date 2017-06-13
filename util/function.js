export const callIfFn = prop => (typeof prop === 'function' ? prop() : prop)
