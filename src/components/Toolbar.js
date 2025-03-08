import React from 'react';

function Toolbar({ markdown, setMarkdown }) {
  const wrapSelection = (before, after = before) => {
    const textarea = document.getElementById('editor-textarea');
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    
    const newText =
      markdown.substring(0, start) +
      before +
      selectedText +
      after +
      markdown.substring(end);
      
    setMarkdown(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd =
        start + before.length + selectedText.length + after.length;
    }, 0);
  };

  const handleBold = () => wrapSelection('**', '**');
  const handleItalic = () => wrapSelection('*', '*');

  const handleHeading = (level = 1) => {
    const hashes = '#'.repeat(level) + ' ';
    wrapSelection(hashes, '');
  };

  const handleLink = () => wrapSelection('[', '](https://example.com)');
  const handleCodeBlock = () => wrapSelection('```\n', '\n```');

  const handleBulletedList = () => {
    const textarea = document.getElementById('editor-textarea');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const lines = selectedText.split('\n');
    const newText = lines.map(line => `- ${line}`).join('\n');
    const finalText = markdown.substring(0, start) + newText + markdown.substring(end);
    setMarkdown(finalText);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = end + (2 * lines.length);
    }, 0);
  };

  const handleNumberedList = () => {
    const textarea = document.getElementById('editor-textarea');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const lines = selectedText.split('\n');
    const newText = lines.map(line => `1. ${line}`).join('\n');
    const finalText = markdown.substring(0, start) + newText + markdown.substring(end);
    setMarkdown(finalText);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = end + (3 * lines.length);
    }, 0);
  };

  const handleBlockquote = () => {
    const textarea = document.getElementById('editor-textarea');
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = markdown.substring(start, end);
    const lines = selectedText.split('\n');
    const newText = lines.map(line => `> ${line}`).join('\n');
    const finalText = markdown.substring(0, start) + newText + markdown.substring(end);
    setMarkdown(finalText);
    setTimeout(() => {
      textarea.focus();
      textarea.selectionStart = textarea.selectionEnd = end + (2 * lines.length);
    }, 0);
  };

  const handleImage = () => wrapSelection('![', '](https://example.com/image.png)');

  return (
    <div style={{ marginBottom: '10px' }} className="toolbar">
      <button onClick={handleBold}>Bold</button>
      <button onClick={handleItalic} style={{ marginLeft: '5px' }}>Italic</button>
      <button onClick={() => handleHeading(1)} style={{ marginLeft: '5px' }}>H1</button>
      <button onClick={() => handleHeading(2)} style={{ marginLeft: '5px' }}>H2</button>
      <button onClick={() => handleHeading(3)} style={{ marginLeft: '5px' }}>H3</button>
      <button onClick={handleLink} style={{ marginLeft: '5px' }}>Link</button>
      <button onClick={handleCodeBlock} style={{ marginLeft: '5px' }}>Code</button>
      <button onClick={handleBulletedList} style={{ marginLeft: '5px' }}>Bullets</button>
      <button onClick={handleNumberedList} style={{ marginLeft: '5px' }}>Numbered</button>
      <button onClick={handleBlockquote} style={{ marginLeft: '5px' }}>Quote</button>
      <button onClick={handleImage} style={{ marginLeft: '5px' }}>Image</button>
    </div>
  );
}

export default Toolbar;
