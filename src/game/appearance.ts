/** Stable visual identity only: appearance never affects the simulation. */
export function appearanceFor(id: string) {
  let hash = 0;
  for (const char of id) hash = (Math.imul(hash, 31) + char.charCodeAt(0)) >>> 0;
  const palette = [
    { shirt: '#b66f62', pants: '#595962', skin: '#d9a681', hair: '#604237', hairStyle: 'short' },
    { shirt: '#648998', pants: '#4f5962', skin: '#bc8567', hair: '#3e3434', hairStyle: 'swept' },
    { shirt: '#82906a', pants: '#5e5752', skin: '#d0a284', hair: '#594334', hairStyle: 'short' },
    { shirt: '#ad8a59', pants: '#4c5961', skin: '#aa775c', hair: '#292927', hairStyle: 'swept' },
  ] as const;
  return palette[hash % palette.length];
}
