import { V_MIN, V_MAX, I_MIN, I_MAX } from "../constants";

export function genRandomDies(n = 4) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2;
    const rFrac = 0.15 + Math.random() * 0.7;
    const leftPct = 50 + Math.cos(a) * (rFrac * 50);
    const topPct = 50 + Math.sin(a) * (rFrac * 50);

    const makeDefect = Math.random() < 0.3;
    let voltage, current;

    if (makeDefect) {
      if (Math.random() < 0.5) {
        voltage =
          Math.random() < 0.5
            ? parseFloat((V_MIN - (Math.random() * 0.2 + 0.01)).toFixed(2))
            : parseFloat((V_MAX + (Math.random() * 0.2 + 0.01)).toFixed(2));
        current = parseFloat((I_MIN + Math.random() * (I_MAX - I_MIN)).toFixed(1));
      } else {
        voltage = parseFloat((V_MIN + Math.random() * (V_MAX - V_MIN)).toFixed(2));
        current = parseFloat((I_MAX + (Math.random() * 15 + 0.5)).toFixed(1));
      }
    } else {
      voltage = parseFloat((V_MIN + Math.random() * (V_MAX - V_MIN)).toFixed(2));
      current = parseFloat((I_MIN + Math.random() * (I_MAX - I_MIN)).toFixed(1));
    }

    arr.push({ id: i + 1, leftPct, topPct, voltage, current });
  }
  return arr;
}

export const isDefectDie = (d) =>
  d.voltage < V_MIN || d.voltage > V_MAX || d.current < I_MIN || d.current > I_MAX;