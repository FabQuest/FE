import { useMemo, useState } from "react";
import { shuffle } from "../utils";
import { OUT_X, ROW_Y, IN_X, INNER_Y, BASE_COLORS } from "../constants";

export const useWiringGame = () => {
  const pads = useMemo(() => {
    const outerColors = shuffle(BASE_COLORS);
    const innerColors = BASE_COLORS;

    const outs = ROW_Y.map((y, i) => ({
      id: `o${i}`,
      x: OUT_X,
      y,
      color: outerColors[i],
      side: "outer",
      size: 8,
    }));

    const ins = INNER_Y.map((y, i) => ({
      id: `i${i}`,
      x: IN_X,
      y,
      color: innerColors[i],
      side: "inner",
      size: 4,
    }));

    return [...outs, ...ins];
  }, []);

  const [selected, setSelected] = useState(null);
  const [wires, setWires] = useState([]);

  const allDone = wires.length === 4;

  const onPadClick = (pad) => {
    if (wires.some((w) => w.from.id === pad.id || w.to.id === pad.id)) return;

    if (!selected) {
      setSelected(pad);
      return;
    }

    if (selected.side !== pad.side && selected.color === pad.color) {
      const pair =
        selected.side === "inner"
          ? { from: selected, to: pad }
          : { from: pad, to: selected };
      setWires((prev) => [...prev, pair]);
      setSelected(null);
    } else {
      setSelected(pad);
    }
  };

  return { pads, selected, wires, allDone, onPadClick };
};
