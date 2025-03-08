// src/components/Editor.js
import React, { forwardRef } from 'react';

const Editor = forwardRef(({ markdown, setMarkdown, previewRef }, ref) => {
  // Function to sync scroll positions
  const handleScroll = () => {
    if (!ref.current || !previewRef.current) return;

    const editor = ref.current;
    const preview = previewRef.current;

    // Calculate the scroll percentage
    const scrollPercentage = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
    // Apply the same percentage to the preview
    preview.scrollTop = scrollPercentage * (preview.scrollHeight - preview.clientHeight);
  };

  return (
    <div className="editor">
      <textarea
        id="editor-textarea"
        ref={ref}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        onScroll={handleScroll} // Listen for scrolling
        placeholder="Type your Markdown or HTML here..."
        rows={10}
      />
    </div>
  );
});

export default Editor;
