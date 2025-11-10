import React from 'react'

// Generic Image component with optional click handler.
// Added pointer cursor automatically if onClick provided.
const ImageTile = ({ photo, className = '', onClick }) => {
  return (
    <img
      src={photo}
      alt="image"
      onClick={onClick}
      className={`w-full h-full object-cover rounded-2xl ${onClick ? 'cursor-pointer select-none' : ''} ${className}`.trim()}
    />
  )
}

export default ImageTile