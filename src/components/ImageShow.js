import "./ImageShow.css";

function ImageShow({ source, alt }) {
  return (
    <div>
      <img src={source} alt={alt} />
    </div>
  );
}

export default ImageShow;
