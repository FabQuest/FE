import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";

// 드롭될 영역
export const BoardSlot = ({
  id,
  style,
  children,
}) => {
  const { setNodeRef, isOver } = useDroppable({ id });

  return (
    <div ref={setNodeRef} style={style} className="slot">
      <div
        style={{
          transition: "120ms ease",
          // isOver일 때 약간 확대 + 그림자 효과
          transform: isOver ? "scale(1.05)" : "scale(1)",
          filter: isOver ? "drop-shadow(0 0 8px rgba(92, 110, 248, 0.5))" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

// 트레이에서 드래그할 조각
export const TrayPiece = ({ id, children, ...props }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      {...props}
      style={{
        // 드래그 중일 때 약간 흐리게
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
        touchAction: "none",
      }}
    >
      {children}
    </button>
  );
};
