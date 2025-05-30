import React from 'react'

function ProductImages({images}) {
  return (
    <div className="mb-6 flex gap-4 overflow-x-auto">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.url}
          alt={`عکس ${idx + 1}`}
          className="rounded-lg w-36 h-24 object-cover flex-shrink-0"
        />
      ))}
    </div>
  )
}

export default ProductImages