import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  padding: 0 1rem;
  @media (max-width: 736px) {
    display: none;
  }
`;

export const MoreText = styled(Link)`
  margin-left: 3rem;
  color: ${({ theme }) => `${theme.colors.grayBase}`};
`;
