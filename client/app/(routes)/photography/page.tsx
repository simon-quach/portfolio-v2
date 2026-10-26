import PhotoGallery from "@/components/PhotoGallery";
import { getPhotos } from "@/utils/photos";

const Photography = async () => {
  const photos = await getPhotos();

  return <PhotoGallery photos={photos} />;
};

export default Photography;
