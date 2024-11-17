import React from "react";

interface GalleryProps {
  images: string[]; // Array of image URLs passed from the backend
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <div className="px-24 py-8">
      <div className="gallery-nav flex justify-between items-center mb-6">
        <a href="#" className="back-link flex items-center text-blue-600 hover:underline">
          <i className="fas fa-arrow-left text-lg"></i>
          See all properties
        </a>
        <div className="action-buttons flex space-x-4">
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            <i className="fas fa-share text-xl"></i>
            <span className="ml-2 text-sm">Share</span>
          </button>
          <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-red-500">
            <i className="fas fa-heart text-xl"></i>
            <span className="ml-2 text-sm">Save</span>
          </button>
        </div>
      </div>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-[450px]">
        {images.length > 0 ? (
          <>
            {/* Main Photo */}
            <div className="gallery-item main-photo">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={images[0]} // The first image
                alt="Main property view"
              />
            </div>

            {/* Grid of Remaining Photos */}
            <div className="gallery-grid-right grid grid-cols-2 gap-4">
              {images.slice(1, 5).map((image, index) => (
                <div key={index} className="gallery-item">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                  />
                </div>
              ))}

              {/* Photo Count Overlay on the Last Image */}
              {images.length > 5 && (
                <div className="gallery-item relative">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={images[5]} // Show the 6th image
                    alt="More images"
                  />
                  <div className="photo-count absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full flex items-center">
                    <i className="fas fa-images text-sm"></i>
                    <strong className="ml-2 text-sm">{`${images.length - 5}+`}</strong>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <p>No images available.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
