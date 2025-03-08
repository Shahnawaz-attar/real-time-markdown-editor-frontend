// src/components/Preview.js
import React from 'react';

const Preview = ({ html }) => {
  return (
    <div className="preview">
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p>Preview will appear here after conversion...</p>
      )}
    </div>
  );
};

export default Preview;
