import "../App.css";
import { PhotoListComponentProps } from "../Interfaces";
import ImageCard from "./ImageCard";

const PhotoList: React.FC<PhotoListComponentProps> = ({ photos }) => {
  return (
    <div className="photos-box">
      {photos.map((image: any) => (
        <ImageCard image={image} key={image.id} />
      ))}
    </div>
  );
}

export default PhotoList;
