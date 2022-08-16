import React from 'react'

const ImageCard = ({imageUrl}) => {
  return (
    <div id='imageContainer' style={{backgroundImage : `url(${imageUrl})` }}></div>
  )
}

export default ImageCard