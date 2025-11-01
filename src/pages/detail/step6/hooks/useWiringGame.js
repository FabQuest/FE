import { useState, useMemo, useEffect } from "react";
import { TARGETS } from "../constants/constants";

import bulb_off from "../assets/bulb_off.png";
import bulb_on from "../assets/bulb_on.png";

export const useWiringGame = () => {
  const [placements, setPlacements] = useState({});
  const [activeId, setActiveId] = useState(null);
  const [trayHeights, setTrayHeights] = useState({});
  const [showModal, setShowModal] = useState(false);

  const allPlaced = useMemo(
    () => TARGETS.every((t) => placements[t.id]),
    [placements]
  );
  const bulbSrc = allPlaced ? bulb_on : bulb_off;

  useEffect(() => {
    if (allPlaced) {
      setTimeout(() => setShowModal(true), 300);
    }
  }, [allPlaced]);

  const handleDragStart = (e) => setActiveId(e.active.id);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    setActiveId(null);
    if (!over) return;

    const draggableId = active.id;
    const droppableId = over.id;

    if (draggableId === droppableId && !placements[droppableId]) {
      setPlacements((prev) => ({ ...prev, [droppableId]: draggableId }));
    }
  };

  const handleDragCancel = () => setActiveId(null);

  const handleModalClose = () => setShowModal(false);

  const activePiece = useMemo(() => {
    if (!activeId) return null;
    return TARGETS.find((t) => t.id === activeId);
  }, [activeId]);

  return {
    placements,
    activeId,
    trayHeights,
    showModal,
    allPlaced,
    bulbSrc,
    activePiece,
    setTrayHeights,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleModalClose,
  };
};
