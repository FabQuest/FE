import React, { useState } from "react";
import * as S from "./styled";
import HelpButtonImg from "@assets/images/helpButton.png";

const Description = ({
  text,
  subText,
  className,
  helpTitle = "도움말",
  helpText,
  showHelpButton = true, 
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (!helpText) return;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <S.Fragment>
      <S.DescriptionText className={className}>{text}</S.DescriptionText>
      {!!subText && (
        <S.SubDescriptionText className={className}>
          {subText}
        </S.SubDescriptionText>
      )}

      {showHelpButton && (
        <S.HelpButton
          src={HelpButtonImg}
          alt="도움말"
          onClick={handleOpen}
          aria-label="도움말 열기"
        />
      )}

      {open && (
        <>
          <S.Overlay onClick={handleClose} />
          <S.HelpModal role="dialog" aria-modal="true" aria-label="도움말">
            <S.HelpHeader>
              <S.HelpTitle>{helpTitle}</S.HelpTitle>
              <S.CloseBtn onClick={handleClose} aria-label="닫기">×</S.CloseBtn>
            </S.HelpHeader>
            <S.HelpBody>{helpText}</S.HelpBody>
            <S.HelpFooter>
              <S.PrimaryBtn onClick={handleClose}>확인</S.PrimaryBtn>
            </S.HelpFooter>
          </S.HelpModal>
        </>
      )}
    </S.Fragment>
  );
};

export default Description;
