import React, { useState } from "react";
import {
  Backdrop,
  PositionedModal,
  ModalTitle,
  ModalCancel,
} from "./modal.styles";

export default function ModalExample({
  children,
  modalLabel = "Change Photo",
  show,
  setShow,
  ...props
}) {
  const renderBackdrop = (props) => <Backdrop {...props} />;

  return (
    <div className="modal-example">
      <PositionedModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
        aria-labelledby="modal-label"
      >
        <div>
          <ModalTitle>{modalLabel}</ModalTitle>
          {children}
          <ModalCancel onClick={() => setShow(false)}>Cancel</ModalCancel>
        </div>
      </PositionedModal>
    </div>
  );
}
