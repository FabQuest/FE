import React, { useEffect } from "react";
import PropTypes from "prop-types";
import * as M from "./styled";

const Modal = ({
  open,
  title,
  description,
  cancelText = "취소",
  confirmText = "확인",
  onClose,
  onCancel,
  onConfirm,
  hideCancel,
  disableBackdropClose = false,
  children,
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
        <M.Title>{title}</M.Title>
        {description && <M.Description>{description}</M.Description>}
        {children}
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

export default Modal;
