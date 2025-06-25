import parseCoords from '../src/utils/parseCoords';

test('разделено запятой с пробелом', () => {
  expect(parseCoords('51.50851, -0.12572')).toEqual({ lat: 51.50851, lng: -0.12572 });
});

test('в квадратных скобках', () => {
  expect(parseCoords('[51.50851, -0.12572]')).toEqual({ lat: 51.50851, lng: -0.12572 });
});

test('некорректный формат', () => {
  expect(() => parseCoords('abc')).toThrow();
});
