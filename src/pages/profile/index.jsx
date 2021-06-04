import React from "react";
import styled from "styled-components";
import { uploadAvatar, uploadImage } from "../../helpers/firebase";
import useUserInfo from "../../hooks/useUserInfo";
import PicUpload from "./picUpload";

export default function Profile() {
  const activeUserInfo = useUserInfo();

  return (
    <ProfileContainer>
      {activeUserInfo && (
        <ProfileTop>
          <ProfileImgWrapper>
            <img src={activeUserInfo.avatar} alt="" />
          </ProfileImgWrapper>
          <ProfileStats>
            <div>
              <h2>{activeUserInfo.username}</h2>
            </div>
          </ProfileStats>
        </ProfileTop>
      )}
      {/* <h1>Profile of {activeUserInfo.username}</h1>
      <PicUpload user={activeUserInfo} uploadFunction={uploadAvatar} /> */}
      <div>
        <h2>Upload pictures</h2>
        <PicUpload user={activeUserInfo} uploadFunction={uploadImage} />
      </div>
    </ProfileContainer>
  );
}

const ProfileContainer = styled.div`
  max-width: 980px;
  margin: 0 auto;
  padding: 4rem;
`;

const ProfileTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 10rem;
  margin-bottom: 2rem;
`;
const ProfileImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 7rem;
    width: 7rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const ProfileStats = styled.div`
  padding: 1rem;
  h2 {
    font-size: 2rem;
  }
`;
