import React from "react";

export const MaskGrid = ({ fg = "#FFFFFF" }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <rect
      x="20" y="20" width="160" height="160"
      fill="none" stroke={fg} strokeWidth="18"
      strokeLinecap="butt" strokeLinejoin="miter"
    />
    <line
      x1="100" y1="20" x2="100" y2="180"
      stroke={fg} strokeWidth="18"
      strokeLinecap="butt" strokeLinejoin="miter"
    />
    <line
      x1="20" y1="100" x2="180" y2="100"
      stroke={fg} strokeWidth="18"
      strokeLinecap="butt" strokeLinejoin="miter"
    />
  </svg>
);

export const MaskTriangles = ({ fg = "#FFFFFF" }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <polygon points="100,32 136,96 64,96" fill={fg} />
    <polygon points="56,112 92,176 20,176" fill={fg} />
    <polygon points="144,112 180,176 104,176" fill={fg} />
  </svg>
);

export const MaskTarget = ({ fg = "#FFFFFF" }) => (
  <svg viewBox="0 0 200 200" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
    <circle cx="100" cy="100" r="62"
      fill="none" stroke={fg} strokeWidth="26"
      strokeLinecap="butt" strokeLinejoin="miter" />
    <circle cx="100" cy="100" r="12" fill={fg} />
  </svg>
);
