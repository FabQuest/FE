import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* 브라우저/기기별 주소창 높이 이슈까지 포함 */
  min-height: 100dvh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  /* 전체 스크롤은 페이지 컨테이너에서 */
  overflow: hidden;
`;

export const Playground = styled.div`
  /* 남은 영역을 꽉 채움 */
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* 내부 스크롤 (헤더/설명은 고정) */
  overflow: auto;

  /* iOS 하단 안전영역 변수 */
  --safe-bottom: max(env(safe-area-inset-bottom, 0px), 16px);

  /* 상단 여백만 약간 */
  padding-top: 14px;
//   background-color: orange;
`;

/* 이미지 컨테이너는 가운데 정렬 + 상대 위치(타깃 배치용) */
export const ImageWrap = styled.div`
  position: relative;
  width: min(92vw, 560px);
  /* 남은 공간에서 적절히 커지도록 */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 너무 커지지 않게 상한선 */
  max-height: 55vh;
//   background-color: lightgray;
`;

export const ProcessImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`;

export const TargetBase = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  min-width: clamp(110px, 28vw, 160px);
  height: clamp(40px, 6.2vw, 52px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const TargetLabel = styled.div`
  background: #eadf95;
  color: #222;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  pointer-events: none;
  white-space: nowrap;
`;

export const ChipBase = styled.div`
  min-width: clamp(110px, 28vw, 160px);
  height: clamp(40px, 6.2vw, 52px);
  padding: 0 14px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #d6ecff 0%, #cbe4ff 100%);
  border: 1.5px solid #7aa8ff;
  color: #0f265f;
  font-weight: 700;
  user-select: none;
  -webkit-user-drag: none;
`;

export const ChipFixed = styled(ChipBase)`
  pointer-events: none;
`;

export const ChipsRow = styled.div`
  margin-top: auto;

  /* 정중앙 정렬 */
  display: flex;
  justify-content: center;
  gap: 14px;

  /* 하단 안전영역 고려해 패딩 */
  padding: 16px 0 calc(var(--safe-bottom));

  /* 배경을 살짝 두어 하단이 비어 보이지 않게(선택) */
//    background: yellow;
   margin-bottom: 15vh;
`;
