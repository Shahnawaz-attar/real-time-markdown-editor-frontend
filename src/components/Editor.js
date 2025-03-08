// src/components/Editor.js
import React from 'react';

const Editor = ({ markdown, setMarkdown }) => {
  return (
    <div className="editor">
      <textarea
        id="editor-textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Type your Markdown or HTML here..."
        rows={10}
      />
    </div>
  );
};

export default Editor;
