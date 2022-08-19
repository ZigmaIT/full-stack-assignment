import React from 'react';
import styled from 'styled-components';
import '../styles/images.css';

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Images = ({data}) => {
    return (
        <div>
            <Img className="category-img" src={data} alt='category-img'/>
        </div>
    );
};

export default Images;