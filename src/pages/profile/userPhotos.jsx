import { useEffect, useState } from "react";
import { getUsersPhotosFromDB } from "../../helpers/firebase";
import Skeleton from "react-loading-skeleton";
import {
  PhotoStats,
  StyledLikeSvg,
  StyledCommentSvg,
  ImageWrapper,
  IconWrapper,
  PhotosContainer,
  PhotosGrid,
  NoPhotosText,
} from "./profile.styles";

export default function UserPhotos({ user, photos, setPhotos }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getProfilePhotos() {
      setLoading(true);
      const photos = await getUsersPhotosFromDB(user.userId);
      setPhotos(photos);
      setLoading(false);
    }
    getProfilePhotos();
  }, [user.userId, setPhotos]);

  return (
    <PhotosContainer>
      <PhotosGrid>
        {loading && <Skeleton width={320} height={400} count={9} />}
        {photos.length > 0
          ? photos.map((photo) => (
              <ImageWrapper key={photo.docId}>
                <img src={photo.imageSrc} alt={photo.caption} />

                <PhotoStats>
                  <IconWrapper>
                    <StyledLikeSvg />
                    {photo.likes.length}
                  </IconWrapper>

                  <IconWrapper>
                    <StyledCommentSvg />
                    {photo.comments.length}
                  </IconWrapper>
                </PhotoStats>
              </ImageWrapper>
            ))
          : null}
      </PhotosGrid>

      {!photos ||
        (photos.length === 0 && <NoPhotosText>No Posts Yet</NoPhotosText>)}
    </PhotosContainer>
  );
}
