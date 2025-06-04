import React from 'react';

const FaceDetector = () => {
  return (
    <div style={{ textAlign: 'center', 
                    backgroundColor: 'blue'
    }}>
      <h2>Live Face Detection</h2>
      <img
        src="http://localhost:5000/video_feed"
        alt="Live face detection"
        style={{ width: '640px', height: '480px', border: '2px solid black' }}
      />
    </div>
  );
};

export default FaceDetector;
