import React from "react";
import useStepStore from "@stores/stepStore";
import Cutting from "./components/Cutting";
import Wiring from "./components/Wiring";
import Fixing from "./components/Fixing";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";

export default function Step8Page() {
  const currentSubStep = useStepStore((state) => state.step8.currentSubStep);
  const setStep8CurrentSubStep = useStepStore(
    (state) => state.setStep8CurrentSubStep
  );

  const phase = (() => {
    switch (currentSubStep) {
      case 1:
        return "cut";
      case 2:
        return "wire";
      case 3:
        return "fix";
      default:
        return "cut";
    }
  })();

  const content = STEP_CONTENT[8];

  return (
    <StepLayout
      title={content.title}
      description={content.description(phase)}
      helpText={content.helpText(phase)}
    >
      {phase === "cut" ? (
        <Cutting onDone={() => setStep8CurrentSubStep(2)} />
      ) : phase === "wire" ? (
        <Wiring onDone={() => setStep8CurrentSubStep(3)} />
      ) : (
        <Fixing />
      )}
    </StepLayout>
  );
}
