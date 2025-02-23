import React, { useState } from 'react';
import './upload.css'; // Ensure the CSS file is imported

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      console.log("File selected:", file.name);
      // Later, send this file to the backend for analysis
    }
  };

  const handleAdvanced = () => {
    console.log("Advanced button clicked");
    // Add advanced functionality here
  };

  return (
    <div className="upload-container">
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="upload-input" 
      />
      <button onClick={handleUpload} className="upload-button">
        Easy
      </button>
      <button onClick={handleAdvanced} className="upload-button">
        Advanced
      </button>
      {file && <p className="file-name">Selected file: {file.name}</p>}
    </div>
  );
};

export default UploadFile;