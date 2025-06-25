export function showModal() {
  return new Promise((resolve) => {
    const coords = prompt('Не удалось получить координаты. Введите их вручную (например, 51.50851, -0.12572):');
    resolve(coords);
  });
}
