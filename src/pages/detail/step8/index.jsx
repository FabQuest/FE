import React, { useState } from "react";
import Cutting from "./components/Cutting";
import Wiring from "./components/Wiring";
import Fixing from "./components/Fixing";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";

export default function Step8Page() {
  const [phase, setPhase] = useState("cut");

  const content = STEP_CONTENT[8];

  return (
    <StepLayout
      title={content.title}
      description={content.description(phase)}
      helpText={content.helpText(phase)}
    >
      {phase === "cut" ? (
        <Cutting onDone={() => setPhase("wire")} />
      ) : phase === "wire" ? (
        <Wiring onDone={() => setPhase("fix")} />
      ) : (
        <Fixing />
      )}
    </StepLayout>
  );
}
