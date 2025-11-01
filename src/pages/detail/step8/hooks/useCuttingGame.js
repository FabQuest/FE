import { useMemo, useState, useCallback } from "react";
import { Y_OFFSET, X_POSITIONS, Y_POSITIONS } from "../constants";

export const useCuttingGame = () => {
  const [nextIndex, setNextIndex] = useState(1);
  const [solidIds, setSolidIds] = useState(new Set());

  const { verticals, horizontals, allLines } = useMemo(() => {
    const verticals = X_POSITIONS.map((x, i) => ({
      id: i + 1,
      x1: x, y1: 14 + Y_OFFSET, x2: x, y2: 86 + Y_OFFSET,
      labelX: x, labelY: 94 + Y_OFFSET
    }));
    const horizontals = Y_POSITIONS.map((y, i) => ({
      id: 7 + i,
      x1: 14, y1: y + Y_OFFSET, x2: 86, y2: y + Y_OFFSET,
      labelX: 90, labelY: y + 1.5 + Y_OFFSET
    }));

    return { verticals, horizontals, allLines: [...verticals, ...horizontals] };
  }, []);

  const isAllDone = solidIds.size === 11;

  const handleClickLine = useCallback((id) => {
    if (id !== nextIndex || solidIds.has(id)) return;
    setSolidIds(prev => new Set(prev).add(id));
    setNextIndex(n => n + 1);
  }, [nextIndex, solidIds]);

  return {
    nextIndex,
    solidIds,
    verticals,
    horizontals,
    allLines,
    isAllDone,
    handleClickLine,
  };
};
