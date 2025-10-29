import React from "react";
import { useDroppable, useDraggable } from "@dnd-kit/core";

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
          transform: isOver ? "scale(1.05)" : "scale(1)",
          filter: isOver ? "drop-shadow(0 0 8px rgba(92, 110, 248, 0.5))" : "none",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const TrayPiece = ({ id, children, ...props }) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      {...props}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "grab",
        touchAction: "none",
      }}
    >
      {children}
    </button>
  );
};
