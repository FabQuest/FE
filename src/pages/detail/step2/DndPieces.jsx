import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";
import * as S from "./styled";

export const TargetDroppable = ({ id, style, filled, children, placedText }) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <S.TargetBase ref={setNodeRef} style={style}>
      <div
        style={{
          transform: isOver ? "scale(1.04)" : "scale(1)",
          transition: "120ms ease",
        }}
      >
        {!filled ? children : <S.ChipFixed>{placedText}</S.ChipFixed>}
      </div>
    </S.TargetBase>
  );
};

export const ChipDraggable = ({ id, children }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    boxShadow: isDragging
      ? "0 8px 18px rgba(50, 80, 200, 0.25)"
      : "0 4px 12px rgba(50, 80, 200, 0.12)",
    cursor: "grab",
    touchAction: "none",
  };

  return (
    <S.ChipBase ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </S.ChipBase>
  );
};
