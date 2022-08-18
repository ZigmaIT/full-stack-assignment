import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "./Image";

const Gallery = () => {

  useEffect(() => {
    fetchImages();
  }, []);

  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [topic, setTopic] = useState("Nature")
  const [page, setPage] = useState(1)

  const option = ["Nature", "Wallpapers", "Fashion"];

  const topicChange = (index) => {
    if (topic === option[index])
      return

    setTopic(option[index])
    setLoaded(false)
    setImages([])
    console.log(topic, option[index])
    fetchImages()
  }

  const fetchImages = () => {
    const accessKey = "HK1IOkVJKK-PzVT0q0beiOY3zoTYFVl8QuOzh5PWIuk";
    axios
      .get(`https://api.unsplash.com/topics/${topic.toLowerCase()}/photos?client_id=${accessKey}&page=${page}&per_page=30`)
      .then(res => {
        setImages([...images, ...res.data]);
        setLoaded(true);
        setPage(prevState => prevState + 1)
      });

  };

  return (
    <>
      <div className="picture-select">
        {
          option.map((op, index) => (
            <span key={index} onClick={() => topicChange(index)}>{op}</span>
          ))
        }
        {console.log(topic)}
      </div>
      <div className="container">
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={
            <h4>Loading...</h4>
          }
        >
          <div className="image-grid" style={{ marginTop: "30px" }}>
            {console.log('ll', loaded)}
            {loaded ?
              images.length && images.map((image, index) => (
                <Image url={image.urls.regular} key={index} />
              )) : ""}
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
export default Gallery