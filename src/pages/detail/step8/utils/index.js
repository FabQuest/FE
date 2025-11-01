export const shuffle = (arr) => arr
  .map((v) => [Math.random(), v])
  .sort((a, b) => a[0] - b[0])
  .map(([, v]) => v);
