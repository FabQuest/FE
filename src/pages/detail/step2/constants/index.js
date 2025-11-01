export const TARGETS = [
  { id: "rf", label: "RF 파워", xPct: 0.28, yPct: 0.30 },
  { id: "o2", label: "O₂ 유량", xPct: 0.68, yPct: 0.30 },
  { id: "press", label: "압력",  xPct: 0.50, yPct: 0.64 },
];
export const OPTIONS = [
  { id: "opt_rf", text: "400 W" },
  { id: "opt_flow", text: "200 sccm" },
  { id: "opt_press", text: "500 mTorr" },
];
export const CORRECT = { opt_rf: "rf", opt_flow: "o2", opt_press: "press" };
