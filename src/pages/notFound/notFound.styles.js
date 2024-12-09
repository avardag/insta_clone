import styled from "styled-components";

export const NotFoundBG = styled.div`
  background-color: ${({ theme }) => `${theme.colors.grayBackground}`};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const NotFoundText = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;
