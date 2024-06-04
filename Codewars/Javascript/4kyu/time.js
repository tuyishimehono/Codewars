function time(seconds) {
  seconds = Number(seconds);
  seconds = Math.abs(seconds);

  const y = Math.floor(seconds / (3600 * 24 * 365));
  const d = Math.floor((seconds % (3600 * 24 * 365)) / (3600 * 25));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  const parts = [];

  if (y > 0) {
    let yDisplay = y > 0 ? y + " " + (y == 1 ? "year" : "years") : "";
    parts.push(yDisplay);
  }

  if (d > 0) {
    let dDisplay = d > 0 ? d + " " + (d == 1 ? "day" : "days") : "";
    parts.push(dDisplay);
  }

  if (h > 0) {
    let hDisplay = h > 0 ? h + " " + (h == 1 ? "hour" : "hours") : "";
    parts.push(hDisplay);
  }

  if (m > 0) {
    let mDisplay = m > 0 ? m + " " + (m == 1 ? "minute" : "minutes") : "";
    parts.push(mDisplay);
  }

  if (s > 0) {
    let sDisplay = s > 0 ? s + " " + (s == 1 ? "second" : "seconds") : "";
    parts.push(sDisplay);
  }
  return (
    parts.slice(0, -1).join(", ") +
    (parts.length > 1 ? " and " : "") +
    parts[parts.length - 1]
  );
}

console.log(time(69382048));
console.log(time(60));
