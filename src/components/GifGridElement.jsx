import React from 'react'

export const GifGridElement = ({title, url}) => {
  
  return (
    <div className='card'>
    <p>{title}</p>
    <img src={url} alt={title} />
    </div>
    )
  }
  