// src/components/Preview.js
import React, { forwardRef } from 'react';

const Preview = forwardRef(({ html }, ref) => {
  return (
    <div className="preview" ref={ref}>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <p>Preview will appear here after conversion...</p>
      )}
    </div>
  );
});

export default Preview;
