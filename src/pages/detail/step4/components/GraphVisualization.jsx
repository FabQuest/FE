import React from "react";
import * as S from "../styled";

const GraphVisualization = ({
  nodePos,
  colorNode,
  colorEdge,
  visitedEdges,
  isDragging,
  dragFrom,
  dragTo,
  currentNode,
  handleNodePointerDown,
  svgRef,
  handleSvgPointerMove,
  handleSvgPointerUp,
  failed,
}) => {
  return (
    <S.DrawingArea
      failed={failed}
      onPointerMove={handleSvgPointerMove}
      onPointerUp={handleSvgPointerUp}
      onPointerCancel={handleSvgPointerUp}
      onPointerLeave={() => isDragging && handleSvgPointerUp()}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        width="300"
        height="300"
        strokeLinecap="round"
        style={{ touchAction: "none" }}
      >
        <g strokeWidth={6}>
          <line x1="40" y1="40" x2="160" y2="40" className={`edge-line ${visitedEdges.includes("A-B") ? "visited" : ""}`} stroke={colorEdge("A", "B")} />
          <line x1="40" y1="40" x2="40" y2="160" className={`edge-line ${visitedEdges.includes("A-C") ? "visited" : ""}`} stroke={colorEdge("A", "C")} />
          <line x1="40" y1="40" x2="160" y2="160" className={`edge-line ${visitedEdges.includes("A-D") ? "visited" : ""}`} stroke={colorEdge("A", "D")} />
          <line x1="160" y1="40" x2="160" y2="160" className={`edge-line ${visitedEdges.includes("B-D") ? "visited" : ""}`} stroke={colorEdge("B", "D")} />
          <line x1="40" y1="160" x2="160" y2="160" className={`edge-line ${visitedEdges.includes("C-D") ? "visited" : ""}`} stroke={colorEdge("C", "D")} />
        </g>

        {isDragging && dragFrom && dragTo && (
          <line
            x1={dragFrom.x}
            y1={dragFrom.y}
            x2={dragTo.x}
            y2={dragTo.y}
            className="preview-line"
            stroke="#7C8BFF"
            strokeWidth={4}
          />
        )}

        {Object.keys(nodePos).map((key) => (
          <circle
            key={key}
            cx={nodePos[key].x}
            cy={nodePos[key].y}
            r="12"
            fill={colorNode(key)}
            className={`node ${currentNode === key ? "active" : ""}`}
            onPointerDown={(e) => handleNodePointerDown(key, e)}
          />
        ))}
      </svg>
    </S.DrawingArea>
  );
};

export default GraphVisualization;
