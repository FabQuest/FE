import * as S from "./styled";
import TrainingPrize from "@assets/images/TrainingPrize.png";
import { GradationBtn } from "@components/training/GradationBtn";
export const PrizeModal = ({ onClose }) => {
  return (
    <S.PrizeBox>
      <S.PrizeImg src={TrainingPrize} />
      <GradationBtn
        text={"뒤로 가기"}
        width={"173"}
        onAction={onClose}
        isMy={true}
      />
    </S.PrizeBox>
  );
};
