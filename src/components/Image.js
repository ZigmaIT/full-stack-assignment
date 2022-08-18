const Image = ({ url, key }) => (
    <div className="image-item" key={key} >
      <img src={url} alt={url} />
      <div className="overlay-text">
        <h2>+ See Project</h2>
      </div>
    </div>
  );

  export default Image