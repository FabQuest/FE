import React from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

const StepCompletionModal = ({ open, onClose, stepNumber, modalContent }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (onClose) onClose();
    if (stepNumber < 8) {
      navigate(`/detail/step${stepNumber + 1}`);
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
