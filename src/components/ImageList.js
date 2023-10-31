import "./ImageList.css";
import ImageShow from "./ImageShow";

function ImageList({ images }) {
  const renderImageList = images.map((image) => {
    return (
      <ImageShow
        key={image.id}
        source={image.urls.small}
        alt={image.alt_description}
      />
    );
  });

  return <div className="container">{renderImageList}</div>;
}

export default ImageList;
