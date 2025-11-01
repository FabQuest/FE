import React, { useEffect } from "react";
import * as M from "../styled";
import modalImage1 from "../assets/modalImage1.png";
import modalImage2 from "../assets/modalImage2.png";

const FinalModal = ({
  open,
  cancelText = "취소",
  confirmText = "확인",
  onClose,
  onCancel,
  onConfirm,
  hideCancel,
  disableBackdropClose = false,
}) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && onClose) onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <M.Backdrop
      role="dialog"
      aria-modal="true"
      onClick={!disableBackdropClose ? onClose : undefined}
    >
      <M.Dialog onClick={(e) => e.stopPropagation()}>
        <M.ModalImage1 src={modalImage1} alt="Modal Decoration 1" />
        <M.ModalImage2 src={modalImage2} alt="Modal Decoration 2" />
  
        <M.Actions $hideCancel={hideCancel}>
          {!hideCancel && (
            <M.OutlineButton onClick={onCancel || onClose}> 
              {cancelText}
            </M.OutlineButton>
          )}
          <M.PrimaryButton $hideCancel={hideCancel} onClick={onConfirm}>{confirmText}</M.PrimaryButton>
        </M.Actions>
      </M.Dialog>
    </M.Backdrop>
  );
};

export default FinalModal;
