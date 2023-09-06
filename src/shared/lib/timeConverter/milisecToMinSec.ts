export function millisecToMinSec(millis: number) {
  const minutes = Math.floor(millis / 1000 / 60);
  const seconds = (millis / 1000 / 60) % 60;

  return [minutes, seconds];
}
