import styled from "styled-components";

export const CommentsContainer = styled.div`
  padding: 0.25rem 1rem 1rem;
`;

export const ViewMoreBtn = styled.button`
  font-size: 0.875rem;
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  margin-bottom: 0.25rem;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const PostedText = styled.p`
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  text-transform: uppercase;
  font-size: 0.75rem;
  margin-top: 0.5rem;
`;

//////
//// AdComment
// className="border-t border-gray-primary"
export const AddCommentCont = styled.div`
  border-top: 1px solid ${({ theme }) => `${theme.colors.grayPrimary}`};
`;
export const AddCommentForm = styled.form`
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  padding-right: 1.25rem;
`;

export const AddCommentInput = styled.input`
  font-size: 0.875rem;
  /* line-height: 1.25rem; */
  color: ${({ theme }) => `${theme.colors.grayBase}`};
  width: 100%;
  margin-right: 0.75rem;
  padding: 1.25rem 1rem;
  border: none;
`;

export const AddCommentBtn = styled.button`
  font-size: 0.875rem;
  /* line-height: 1.25rem; */
  font-weight: bold;
  color: ${({ theme }) => `${theme.colors.blueMedium}`};
  opacity: ${({ disabled }) => (disabled ? 0.25 : 1)};
  border: none;
  padding: 0rem 1.5rem;
`;
