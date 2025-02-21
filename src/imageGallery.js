const ImageGallery = ({ imageList }) => {
  return (
    <div>
      {imageList.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`image-${index}`}
          className="Project-Preview fade-in"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
