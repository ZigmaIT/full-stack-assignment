import React from 'react'
import '../CSS/imageCard.css'
import '../index.css'

const ImageCard = ({imageUrl}) => {
  return (
    <div id='imageContainer' style={{backgroundImage : `url(${imageUrl})` }}></div>
  )
}

export default ImageCard