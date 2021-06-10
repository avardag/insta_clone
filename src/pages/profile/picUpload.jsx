import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { uploadAvatar, uploadImage } from "../../helpers/firebase";

export default function PicUpload({ userId, avatar, labelText, setModalShow }) {
  const history = useHistory();
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileInputChange = async (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
    // if (imageAsFile.type === "image/jpeg" || imageAsFile.type === "image/png") {
    if (image.type === "image/jpeg" || image.type === "image/png") {
      try {
        const imgURL = avatar
          ? await uploadAvatar(userId, image)
          : await uploadImage(userId, image);
        setImageAsFile("");
        setImageUrl(imgURL);
        setModalShow(false);
        history.push("/");
      } catch (error) {
        setImageAsFile("");
        console.log(" error uploading");
      }
    } else {
      console.log("Upload JPEG or PNG");
    }
  };

  const inputName = avatar ? "avatarpic" : "picture";

  return (
    <>
      <FileInput
        type="file"
        name={inputName}
        id={inputName}
        onChange={(e) => handleFileInputChange(e, avatar)}
        accept="image/png, image/jpeg"
        required
      />
      {labelText ? (
        <TextLabel htmlFor={inputName}>{labelText}</TextLabel>
      ) : (
        <Label htmlFor={inputName}>+</Label>
      )}
    </>
  );
}

const FileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 30px;
  height: 30px;
  /* margin: 1rem; */
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.grayBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blueMedium};
  cursor: pointer;
  font-weight: 300;
  font-size: 2rem;
  transition: transform 0.2s ease-out;
`;
const TextLabel = styled.label`
  display: block;
  position: relative;
  width: 100%;
  padding: 1.2rem;
  color: ${({ theme }) => theme.colors.blueMedium};
  cursor: pointer;
  font-size: 1.2rem;
  transition: transform 0.2s ease-out;
`;
