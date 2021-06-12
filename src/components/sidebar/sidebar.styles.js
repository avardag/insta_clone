import styled from "styled-components";

export const SidebarWrapper = styled.div`
  padding: 1rem;
  @media (max-width: 736px) {
    display: none;
  }
`;

export const SuggestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SuggestionsTitle = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  /* text-align: center; */
  color: ${({ theme }) => `${theme.colors.grayBase}`};
`;
export const SuggestionsList = styled.div`
  margin-top: 1rem;
`;

//SUGESTED PROFILES
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
export const ProfileLeft = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
  p {
    font-weight: bold;
  }
`;

export const FollowBtn = styled.button`
  display: inline-block;
  background-color: transparent;
  color: ${({ theme }) => `${theme.colors.blueMedium}`};
  cursor: pointer;
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
  width: 4rem;
  padding: 0;
  margin: 0 0.6rem;
  font-size: 0.875rem;
  text-align: center;
`;
