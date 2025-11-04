import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { GradationBtn } from "./GradationBtn";

export const ExplainCard = ({ stepex, stepId, title, text }) => {
  const navigate = useNavigate();
  const isLocked = stepId > stepex;
  const isDone = stepId < stepex;
  const label = isDone ? "완료된 단계입니다" : "체험하기";

  const handleNavigate = () => {
    if (isLocked) return;
    if (stepId) {
      navigate(`/detail/step${stepId}`);
    }
  };

  return (
    <S.ExplainBox>
      <S.ExplainStepWrapper>
        <S.ExplainStepName>{title}</S.ExplainStepName>
        <S.ExplainStep>{text}</S.ExplainStep>
      </S.ExplainStepWrapper>
      <GradationBtn
        onAction={handleNavigate}
        text={label}
        width={"288"}
        disabled={isLocked}
        tone={isLocked ? false : true}
      />
    </S.ExplainBox>
  );
};
