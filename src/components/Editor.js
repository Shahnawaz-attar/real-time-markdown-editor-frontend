import React, { forwardRef } from 'react';

const Editor = forwardRef(({ markdown, setMarkdown, previewRef }, ref) => {
  const handleScroll = () => {
    if (!ref.current || !previewRef.current) return;

    const editor = ref.current;
    const preview = previewRef.current;

    const scrollPercentage = editor.scrollTop / (editor.scrollHeight - editor.clientHeight);
    preview.scrollTop = scrollPercentage * (preview.scrollHeight - preview.clientHeight);
  };

  return (
    <div className="editor">
      <textarea
        id="editor-textarea"
        ref={ref}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        onScroll={handleScroll} 
        placeholder="Type your Markdown or HTML here..."
        rows={10}
      />
    </div>
  );
});

export default Editor;
