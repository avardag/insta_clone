import { useState, useContext } from "react";
import { useHistory } from "react-router";
import UserAuthContext from "../../context/userAuth";
import { uploadImage } from "../../helpers/firebase";
import * as ROUTES from "../../constants/routes";
import { Header } from "../../components";
import {
  UploadContainer,
  FileInput,
  TextLabel,
  PlusLabel,
  UploadForm,
  CaptionInput,
  PreviewImgWrapper,
  Button,
  ErrorMessage,
} from "./imageUpload.styles";

export default function Upload() {
  const { user } = useContext(UserAuthContext);
  const history = useHistory();
  const [imageAsFile, setImageAsFile] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [caption, setCaption] = useState("");

  //HANDLE FILE INPUT CHANGE
  const handleFileInputChange = async (e) => {
    const image = e.target.files[0];
    const tempImg = URL.createObjectURL(image);

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setImageAsFile(image);
      setImagePreview(tempImg);
      setErrorMsg("");
    } else {
      setErrorMsg("Upload JPEG or PNG");
    }
  };
  //
  //HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageAsFile === "") {
      setErrorMsg("Image file not found");
      return;
    }
    if (caption === "") {
      setErrorMsg("Add image caption");
      return;
    }

    try {
      setLoading(true);
      const imgURL = await uploadImage(user.uid, imageAsFile, caption);
      setImageAsFile("");
      setImageUrl(imgURL);
      setLoading(false);
      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setLoading(false);
      setImageAsFile("");
      setErrorMsg("Error uploading");
    }
  };

  return (
    <>
      <Header />
      <UploadContainer>
        <UploadForm onSubmit={handleSubmit}>
          <FileInput
            type="file"
            name="picture"
            id="picture"
            onChange={(e) => handleFileInputChange(e)}
            accept="image/png, image/jpeg"
            required
          />
          <PlusLabel htmlFor="picture">+</PlusLabel>
          <ErrorMessage>{errorMsg}</ErrorMessage>
          <TextLabel htmlFor="picture">Upload New photo</TextLabel>
          <CaptionInput
            name="caption"
            id="caption"
            type="text"
            placeholder="Add image caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            required
          />
          <PreviewImgWrapper $loading={loading}>
            {imagePreview && <img src={imagePreview} alt="" />}
          </PreviewImgWrapper>
          <Button disabled={!imageAsFile || !caption || loading}>Submit</Button>
        </UploadForm>
      </UploadContainer>
    </>
  );
}
