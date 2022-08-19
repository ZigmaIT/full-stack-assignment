import React, { useEffect, useState } from 'react';
import Header from './Header';
import Loader from './Loader';
import Images from './Images';
import styled, { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        font-family: sans-serif;
    }
`;

const ImageWrapper = styled.section`
    max-width: 70rem;
    margin: 4rem auto;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(3, 1fr);
`;
const Category = styled.div`
    display: flex;
    padding: 20px 100px;
    justify-content: center;
    align-items: center;
    & > a {
        padding: 10px;
        text-decoration: none;
        color: #000;
    }
`

const Home = () => {
    const [ images, setImages ] = useState([]);
    const [collection, setCollection] = useState("all");
    const [ page, changePage ] = useState(1);

    
    const fetchImages = async() =>{
        const rootApi = `https://api.unsplash.com`;
        const accessKey = process.env.REACT_APP_ACCESSKEY;

        await axios.get(`${rootApi}/search/photos?page=${page}&query=${collection}&client_id=${accessKey}`)
        .then(res => setImages([ ...images, ...res?.data?.results]))
        // .then(res => console.log(res.data.results))
        .catch((error) => console.log(error))
        changePage(page + 1);
    };

    useEffect(() => {
        fetchImages(collection)
        changePage(1);
    }, [collection]);
    
    return (
        <section>
            <Header/>
            <GlobalStyle/>
            <Category>
                <Link
                    to="/all"
                    onClick={() => {
                    if (collection === "all") return;
                    setCollection("all");
                    setImages([]);
                }}>
                    All
                </Link>
                <Link
                    to="/webdesign"
                    onClick={() => {
                    if (collection === "webdesign") return;
                    setCollection("webdesign");
                    setImages([]);
                }}>
                    Web Design
                </Link>
                <Link
                    to="/graphics"
                    onClick={() => {
                    if (collection === "graphics") return;
                    setCollection("graphics");
                    setImages([]);
                }}>
                    Graphics
                </Link>
                <Link
                    to="/3d"
                    onClick={() => {
                    if (collection === "3d") return;
                    setCollection("3d");
                    setImages([]);
                }}>
                    3D Design
                </Link>
            </Category>
            <InfiniteScroll
                dataLength={images.length}
                next={fetchImages}
                hasMore={<Loader/>}            
            >
                <ImageWrapper>
                    {
                        images.map(image => (
                            <Images data={image.urls.thumb} key={image.id} />
                        ))
                    }
                </ImageWrapper>
            </InfiniteScroll>            
        </section>
    );
};

export default Home;