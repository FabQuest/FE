import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { postStageUp } from '@apis/user';

const StepCompletionModal = ({ open, onClose, stepNumber, modalContent }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open && stepNumber < 8) {
      const nextStageNumber = stepNumber + 1;
      postStageUp(nextStageNumber)
        .then(res => {
          console.log(`Step up to ${nextStageNumber} successful:`, res);
        })
        .catch(err => {
          console.error(`Step up to ${nextStageNumber} failed:`, err);
        });
    }
  }, [open]);

  const handleConfirm = () => {
    if (onClose) onClose();
    if (stepNumber < 8) {
      navigate(`/detail/step${stepNumber + 1}`);
    } else {
      navigate('/training');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      onConfirm={handleConfirm}
      title={modalContent.title}
      description={modalContent.description}
      confirmText={modalContent.confirmText}
      cancelText={modalContent.cancelText}
      disableBackdropClose
    />
  );
};

export default StepCompletionModal;