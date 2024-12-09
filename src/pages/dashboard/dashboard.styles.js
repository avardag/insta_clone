import styled from "styled-components/macro";

export const DashboardMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  max-width: 980px;
  margin: 0 auto;
  gap: 1rem;
  padding: 0 1rem;
  @media (max-width: 736px) {
    grid-template-columns: 1fr;
  }
`;
