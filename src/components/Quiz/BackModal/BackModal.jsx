import * as S from "./styled";
import { useNavigate } from "react-router-dom";
export const BackModal = ({ setIsBackState, onClose }) => {
  const navigate = useNavigate();
  const handleBackHome = () => {
    try {
      setIsBackState(false);
    } finally {
      navigate("/home");
    }
  };
  return (
    <S.Overlay>
      <S.ModalContainer>
        <S.TextBox>
          <S.MainText>홈화면으로 돌아가시겠습니까?</S.MainText>
          <S.SubText>문제 진행 상황은 저장되지않습니다.</S.SubText>
        </S.TextBox>
        <S.BtnContainer>
          <S.BackBtn $isBack={true} onClick={handleBackHome}>
            홈으로 나가기
          </S.BackBtn>
          <S.BackBtn $isBack={false} onClick={onClose}>
            취소
          </S.BackBtn>
        </S.BtnContainer>
      </S.ModalContainer>
    </S.Overlay>
  );
};
