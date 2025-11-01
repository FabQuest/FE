import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import { GradationBtn } from "./GradationBtn";

export const ExplainCard = ({ stepId, title, text }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
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
      <GradationBtn onAction={handleNavigate} text={"체험하기"} width={"288"} />
    </S.ExplainBox>
  );
};
