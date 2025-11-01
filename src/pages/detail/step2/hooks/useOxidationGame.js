import { useMemo, useState, useEffect } from "react";
import { TARGETS, CORRECT } from "../constants";

export const useOxidationGame = () => {
  const [openComplete, setOpenComplete] = useState(false);
  const [placements, setPlacements] = useState({});
  const [activeId, setActiveId] = useState(null);

  const allMatched = useMemo(
    () => TARGETS.every((t) => placements[t.id]),
    [placements]
  );
  useEffect(() => { if (allMatched) setOpenComplete(true); }, [allMatched]);

  const handleDragStart = (e) => setActiveId(e.active.id);
  const handleDragEnd = (e) => {
    const { active, over } = e;
    setActiveId(null);
    if (!over) return;
    const optionId = active.id;
    const targetId = over.id;
    if (placements[targetId]) return;
    if (CORRECT[optionId] === targetId) {
      setPlacements((p) => ({ ...p, [targetId]: optionId }));
    }
  };
  const handleDragCancel = () => setActiveId(null);

  return {
    openComplete,
    setOpenComplete,
    placements,
    activeId,
    allMatched,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
  };
};
