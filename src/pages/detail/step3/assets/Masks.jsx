import React from "react";

/* ── SVG 마스크들 ───────────────────────────────────── */
/* Grid(격자) */
export const MaskGrid = ({ fg = "#FFFFFF" }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    {/* 바깥 테두리 */}
    <rect
      x="20" y="20" width="160" height="160"
      fill="none" stroke={fg} strokeWidth="18"
      strokeLinecap="butt" strokeLinejoin="miter"
    />
    {/* 세로 바 */}
    <line
      x1="100" y1="20" x2="100" y2="180"
      stroke={fg} strokeWidth="18"
      strokeLinecap="butt" strokeLinejoin="miter"
    />
    {/* 가로 바 */}
    <line
      x1="20" y1="100" x2="180" y2="100"
      stroke={fg} strokeWidth="18"
      strokeLinecap="butt" strokeLinejoin="miter"
    />
  </svg>
);

/* Triangles(삼각형 3개) */
export const MaskTriangles = ({ fg = "#FFFFFF" }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    {/* 위 삼각형 (그대로) */}
    <polygon points="100,32 136,96 64,96" fill={fg} />
    {/* 아래 왼쪽 삼각형 - 오른쪽 꼭짓점을 96으로 이동 */}
    <polygon points="56,112 92,176 20,176" fill={fg} />
    {/* 아래 오른쪽 삼각형 - 왼쪽 꼭짓점을 104로 이동 */}
    <polygon points="144,112 180,176 104,176" fill={fg} />
  </svg>
);

/* Target(과녁) */
export const MaskTarget = ({ fg = "#FFFFFF" }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    {/* 굵은 링 */}
    <circle cx="100" cy="100" r="62"
      fill="none" stroke={fg} strokeWidth="26"
      strokeLinecap="butt" strokeLinejoin="miter" />
    {/* 작은 점 */}
    <circle cx="100" cy="100" r="12" fill={fg} />
  </svg>
);
