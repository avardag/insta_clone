import React, { useState } from "react";
import styled from "styled-components";

export default function PicUpload({ user, uploadFunction }) {
  const [imageAsFile, setImageAsFile] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleUpload = async (event) => {
    event.preventDefault();
    if (imageAsFile.type === "image/jpeg" || imageAsFile.type === "image/png") {
      const imgURL = await uploadFunction(user.userId, imageAsFile);
      console.log("🚀 ~ handleUpload ~ imgURL", imgURL);
      setImageAsFile("");
      setPreviewUrl("");
      setImageUrl(imgURL);
    } else {
      console.log("Upload JPEG or PNG");
    }
  };

  const handleFileInputChange = (e) => {
    const image = e.target.files[0];
    const objurl = URL.createObjectURL(image);
    setPreviewUrl(objurl);
    setImageAsFile(image);
  };

  return (
    <div>
      <PicUploadContainer>
        <UploadForm onSubmit={handleUpload}>
          <FileInput
            type="file"
            name="picture"
            id="picture"
            onChange={(e) => handleFileInputChange(e)}
            accept="image/png, image/jpeg"
            required
          />
          <Label htmlFor="picture">+</Label>
          {previewUrl ? (
            <UploadBtn>Upload Now</UploadBtn>
          ) : (
            <UploadText>Select a picture to upload</UploadText>
          )}
        </UploadForm>
        {previewUrl && (
          <PictureWrapper>
            <img src={previewUrl} alt="" />
          </PictureWrapper>
        )}
      </PicUploadContainer>
    </div>
  );
}

const PicUploadContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const UploadForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;
const PictureWrapper = styled.div`
  width: 300px;
  height: 300px;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const FileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: 1rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.grayBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blueMedium};
  cursor: pointer;
  font-weight: 300;
  font-size: 4rem;
  transition: transform 0.2s ease-out;
`;

export const UploadBtn = styled.button`
  display: inline-block;
  color: #fff;
  background-color: ${({ theme }) => `${theme.colors.blueMedium}`};
  cursor: pointer;
  font-weight: bold;
  border: none;
  border-radius: 0.4rem;
  width: 8rem;
  padding: 0.75rem 1rem;
  line-height: 1rem;
  font-size: 0.875rem;
  text-align: center;
`;

export const UploadText = styled.h4`
  color: ${({ theme }) => `${theme.colors.blueMedium}`};
  font-weight: bold;
  font-size: 1.1rem;
`;
