import { useState, useRef, useEffect, useCallback } from "react";

const nodePos = {
  A: { x: 40, y: 40 },
  B: { x: 160, y: 40 },
  C: { x: 40, y: 160 },
  D: { x: 160, y: 160 },
};
const adj = {
  A: ["B", "C", "D"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C", "A"],
};
const allEdges = [
  ["A", "B"],
  ["A", "C"],
  ["A", "D"],
  ["B", "D"],
  ["C", "D"],
];

const edgeKey = (a, b) => [a, b].sort().join("-");

export const useGraphGame = (navigate) => {
  // --- 상태 --- 
  const [currentNode, setCurrentNode] = useState(null);
  const [visitedEdges, setVisitedEdges] = useState([]);
  const [visitedNodes, setVisitedNodes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [failed, setFailed] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragFrom, setDragFrom] = useState(null);
  const [dragTo, setDragTo] = useState(null);
  const svgRef = useRef(null);

  const isAllVisited = visitedEdges.length === allEdges.length;

  const toSvgXY = useCallback((clientX, clientY) => {
    if (!svgRef.current) return { x: 0, y: 0 };
    const pt = svgRef.current.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const m = svgRef.current.getScreenCTM();
    if (!m) return { x: 0, y: 0 };
    const inv = m.inverse();
    const { x, y } = pt.matrixTransform(inv);
    return { x, y };
  }, []);

  const nearestNode = useCallback((x, y, radius = 16) => {
    let found = null;
    let minD = Infinity;
    Object.entries(nodePos).forEach(([id, p]) => {
      const d = Math.hypot(p.x - x, p.y - y);
      if (d < radius && d < minD) {
        minD = d;
        found = id;
      }
    });
    return found;
  }, []);

  const colorEdge = useCallback((a, b) =>
    visitedEdges.includes(edgeKey(a, b)) ? "#5C6EF8" : "#000"
  , [visitedEdges]);

  const colorNode = useCallback((id) => {
    if (failed) return "#ff4d4f";
    if (currentNode === id) return "#5C6EF8";
    if (visitedNodes.includes(id)) return "#94B1FF";
    return "#000";
  }, [failed, currentNode, visitedNodes]);

  const failAndReset = useCallback(() => {
    setFailed(true);
    setTimeout(() => {
      setFailed(false);
      setCurrentNode(null);
      setVisitedEdges([]);
      setVisitedNodes([]);
      setIsDragging(false);
      setDragFrom(null);
      setDragTo(null);
    }, 600);
  }, []);

  const handleNodePointerDown = useCallback((nodeId, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!currentNode) {
        setCurrentNode(nodeId);
        setVisitedNodes([nodeId]);
    }

    else if (currentNode !== nodeId) {
    return;
    }
    const start = nodePos[nodeId];
    setDragFrom({ nodeId, x: start.x, y: start.y });
    setDragTo({ x: start.x, y: start.y });
    setIsDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }, [currentNode, visitedNodes]);

  const handleSvgPointerMove = useCallback((e) => {
    if (!isDragging || !dragFrom) return;
    const { x, y } = toSvgXY(e.clientX, e.clientY);
    setDragTo({ x, y });
  }, [isDragging, dragFrom, toSvgXY]);

  const handleSvgPointerUp = useCallback((e) => {
    if (!isDragging || !dragFrom) return;
    setIsDragging(false);

    const { x, y } = toSvgXY(e.clientX, e.clientY);
    const dropNode = nearestNode(x, y, 18);

    setDragTo(null);

    if (!dropNode) return;

    const fromId = dragFrom.nodeId;
    const toId = dropNode;

    if (fromId === toId) return;

    if (!adj[fromId].includes(toId)) {
      failAndReset();
      return;
    }

    const key = edgeKey(fromId, toId);
    if (visitedEdges.includes(key)) {
      failAndReset();
      return;
    }

    setVisitedEdges((prev) => [...prev, key]);
    setVisitedNodes((prev) =>
      prev.includes(toId) ? prev : [...prev, toId]
    );
    setCurrentNode(toId);

    if (visitedEdges.length + 1 === allEdges.length) {
      setShowModal(true);
    }
  }, [isDragging, dragFrom, toSvgXY, nearestNode, failAndReset, visitedEdges, visitedNodes, currentNode]);

  const handleModalClose = useCallback(() => setShowModal(false), []);
  const handleModalConfirm = useCallback(() => {
    setShowModal(false);
    navigate("/detail/step5");
  }, [navigate]);

  return {
    nodePos,
    adj,
    allEdges,
    edgeKey,
    isAllVisited,
    currentNode,
    visitedEdges,
    visitedNodes,
    showModal,
    failed,
    isDragging,
    dragFrom,
    dragTo,
    svgRef,
    colorEdge,
    colorNode,
    handleNodePointerDown,
    handleSvgPointerMove,
    handleSvgPointerUp,
    handleModalClose,
    handleModalConfirm,
  };
};