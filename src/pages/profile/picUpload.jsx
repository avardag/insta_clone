import React, { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { uploadAvatar } from "../../helpers/firebase";

export default function PicUpload({ userId, labelText, setModalShow }) {
  const history = useHistory();
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFileInputChange = async (e) => {
    const image = e.target.files[0];
    setImageAsFile(image);
    if (image.type === "image/jpeg" || image.type === "image/png") {
      try {
        const imgURL = await uploadAvatar(userId, image);
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

  return (
    <>
      <FileInput
        type="file"
        name="avatarpic"
        id="avatarpic"
        onChange={(e) => handleFileInputChange(e)}
        accept="image/png, image/jpeg"
        required
      />
      <TextLabel htmlFor="avatarpic">{labelText}</TextLabel>
    </>
  );
}

const FileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
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
