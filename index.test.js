const { writer, batch } = require('./index');

describe('type-writer', () => {
  test('should process string input', () => {
    expect(writer('hello')).toBeDefined();
  });

  test('should throw on null input', () => {
    expect(() => writer(null)).toThrow(TypeError);
  });

  test('should handle empty string', () => {
    const result = writer('');
    expect(result).toBe('');
  });

  test('batch should process array', () => {
    const results = batch(['a', 'b', 'c']);
    expect(results).toHaveLength(3);
  });

  test('batch should throw on non-array', () => {
    expect(() => batch('not array')).toThrow(TypeError);
  });
});
