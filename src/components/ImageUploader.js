// src/components/ImageUploader.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTimes } from '@fortawesome/free-solid-svg-icons';

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onImageUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    onImageUpload(null); // Clear the uploaded image
  };

  return (
    <div className="flex items-center mr-2">
      <label className="cursor-pointer bg-gray-200 p-2 rounded flex items-center">
        {preview ? (
          <div className="relative">
            <img src={preview} alt="Preview" className="w-8 h-8 rounded-full mr-2" />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-0 right-0 text-red-500 text-xs bg-white rounded-full p-1 hover:bg-gray-300"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        ) : (
          <>
            <FontAwesomeIcon icon={faUpload} className="mr-1" />
            Upload Image
          </>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default ImageUploader;
