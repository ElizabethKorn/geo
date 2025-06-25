export default function parseCoords(input) {
  const cleaned = input.trim().replace(/[\[\]]/g, "");
  const parts = cleaned.split(",");
  if (parts.length !== 2) {
    throw new Error("Неверный формат координат");
  }
  const lat = parseFloat(parts[0].trim());
  const lng = parseFloat(parts[1].trim());
  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    throw new Error("Неверные значения координат");
  }
  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error("Координаты вне допустимого диапазона");
  }

  return { lat, lng };
}
