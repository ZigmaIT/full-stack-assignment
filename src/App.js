import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

//components

import Footer from "./components/footer";
import Header from "./components/header";
import ImageCard from "./components/imageCard";
import Loader from "./components/loader";
import Tagline from "./components/tagLine";

//jsfiles and icons

import { BsFillShiftFill } from "react-icons/bs";



const App = () => {
  const [collection, changeCollection] = useState("all");
  const [imagesArray, changeImagesArray] = useState([]);
  const [page, changePage] = useState(1);

  let fetchData = async () => {
    let apiKey = process.env.REACT_APP_API_KEY;
    let baseUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${collection}&client_id=${apiKey}`;
    await axios
      .get(baseUrl)
      .then((imagesData) => {
        const {
          data: { results },
        } = imagesData;
        let new_ImagesArray = results.map((item) => item.urls.full);
        changeImagesArray([...imagesArray, ...new_ImagesArray]);
      })
      .catch((error) => console.log(error));
    changePage(page + 1);
  };

  useEffect(() => {
    changePage(1);
    fetchData(collection);
  }, [collection]);

  return (
    <BrowserRouter>
      <div id="wrapper">
        <Header></Header>
        <Tagline></Tagline>
        <nav id="navBar">
          <Link
            to="/Fashion"
            onClick={() => {
              if (collection === "Fashion") return;
              changeCollection("Fashion");
              changeImagesArray([]);
            }}
          >
            Fashion
          </Link>
          <Link
            to="/Castles"
            onClick={() => {
              if (collection === "Castles") return;
              changeCollection("Castles");
              changeImagesArray([]);
            }}
          >
            Castles
          </Link>
          <Link
            to="/Food"
            onClick={() => {
              if (collection === "Food") return;
              changeCollection("Food");
              changeImagesArray([]);
            }}
          >
            Food
          </Link>
          <Link
            to="/Adventure"
            onClick={() => {
              if (collection === "Adventure") return;
              changeCollection("Adventure");
              changeImagesArray([]);
            }}
          >
            Adventure
          </Link>
        </nav>
        <InfiniteScroll
          dataLength={imagesArray.length}
          next={fetchData}
          hasMore={true}
          loader={<Loader />}
        >
          <div id="imagesBox">
            {imagesArray.map((item, index) => {
              return <ImageCard key={index} imageUrl={item}></ImageCard>;
            })}
          </div>
        </InfiniteScroll>

        <Footer></Footer>
        <a href="#header" id="gotoTop">
          <BsFillShiftFill></BsFillShiftFill>
        </a>
      </div>
    </BrowserRouter>
  );
};

export default App;
