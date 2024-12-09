import styled from "styled-components";

export const UploadContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;
export const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;

  min-width: 24rem;
  max-width: 14rem;

  background: #fff;
  border: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  border-radius: 0.5rem;
  padding: 2rem;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => `${theme.colors.redPrimary}`};
  margin: 0.5rem 0;
  font-size: 0.8rem;
`;

export const FileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

export const TextLabel = styled.label`
  display: block;
  position: relative;
  color: ${({ theme }) => theme.colors.blueMedium};
  cursor: pointer;
  font-size: 1.5rem;
  transition: transform 0.2s ease-out;
`;

export const PlusLabel = styled.label`
  display: block;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blueMedium};
  font-size: 6rem;
  cursor: pointer;
  transition: transform 0.2s ease-out;
`;

export const CaptionInput = styled.input`
  font-size: 0.875rem;
  width: 100%;
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  background: #fff;
  margin: 1rem;
  padding: 1.25rem 1rem;
  height: 0.5rem;
  border: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  border-radius: 0.25rem;
  outline: 0;
  overflow: hidden;
`;

export const PreviewImgWrapper = styled.div`
  border: ${({ theme }) => `1px solid ${theme.colors.grayPrimary}`};
  opacity: ${({ $loading }) => ($loading ? 0.5 : 1)};
  height: 14rem;
  width: 100%;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Button = styled.button`
  display: block;
  appearance: none;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: #fff;
  font-weight: bold;
  /* background-color: #b2dffc; */
  background-color: ${({ theme }) => `${theme.colors.blueMedium}`};
  font-size: 1rem;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  width: 100%;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
