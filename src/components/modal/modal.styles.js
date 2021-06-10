import styled from "styled-components";
import Modal from "react-overlays/Modal";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;

export const PositionedModal = styled(Modal)`
  position: fixed;
  width: 400px;
  z-index: 1040;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  /* padding: 20px; */
  text-align: center;
`;
export const ModalTitle = styled.h3`
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  padding: 2rem;
  width: 100%;
  font-weight: bold;
  font-size: 1.2rem;
  border-bottom: 1px solid ${({ theme }) => `${theme.colors.grayPrimary}`};
`;
export const ModalCancel = styled.p`
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  padding: 1.5rem;
  width: 100%;
  font-weight: 300;
  font-size: 1.2rem;
  border-top: 1px solid ${({ theme }) => `${theme.colors.grayPrimary}`};
  cursor: pointer;
`;
