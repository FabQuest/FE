import * as S from "./styled";
import RemoveIcon from "@assets/icon/removeIcon.png";
export const QuizModal = ({ onClose }) => {
  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.RemoveIcon src={RemoveIcon} onClick={onClose} />
        <S.MainText>체험을 완료하면 퀴즈를 풀 수 있어요. </S.MainText>
        <S.SubText>우선 체험을 완료해보세요! </S.SubText>
      </S.ModalContainer>
    </S.Overlay>
  );
};
