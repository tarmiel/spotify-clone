function padTo2Digits(num: number) {
  return num.toString().padStart(2, '0');
}

export function convertMsToTime(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;

  minutes = minutes % 60;

  const result = `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;

  if (hours > 0) {
    return `${padTo2Digits(hours)}:` + result;
  }

  return result;
}
