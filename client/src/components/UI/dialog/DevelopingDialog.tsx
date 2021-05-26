import React from 'react';
import DialogTemplate from './DialogTemplate';
import styled from '@emotion/styled';

interface Props {
  visible: boolean;
  closeDialog: () => void;
}

const DevelopingDialog = ({ visible, closeDialog }: Props) => {
  if (!visible) return null;

  return (
    <DialogTemplate>
      <DialogBlock>
        <h3>Oops! 개발 중입니다!🔥🔥</h3>
        <CancelBtn onClick={closeDialog}>X</CancelBtn>
      </DialogBlock>
    </DialogTemplate>
  );
};

const DialogBlock = styled.div`
  width: 400px;
  padding: 1.5rem;
  background: ${({ theme }) => theme.dialogBackgroundColor};
  border: ${({ theme }) => theme.border};
  border-radius: 2px;

  & > h3 {
    margin: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryColor};
  }
  display: flex;
  justify-content: space-between;
`;

const CancelBtn = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.primaryColor};
  background: ${({ theme }) => theme.seriesTitleBoxColor};
`;

export default DevelopingDialog;
