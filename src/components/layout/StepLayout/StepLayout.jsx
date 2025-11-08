import React from 'react';
import CommonHeader from '@components/common/Header/Header';
import CommonDescription from '@components/common/Description/Description';
import * as S from './styled';

const StepLayout = ({ title, description, subDescription, helpText, modalProps, children, ModalComponent }) => {
  return (
    <S.PageContainer>
      <CommonHeader title={title} />
      <CommonDescription text={description} subText={subDescription} helpText={helpText} />
      {children}
      {modalProps && ModalComponent && <ModalComponent {...modalProps} />}
    </S.PageContainer>
  );
};

export default StepLayout;
