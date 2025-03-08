// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  const initialMarkdown = localStorage.getItem('markdown') || '# Hello, Markdown!\n\nType your Markdown here and use the toolbar to format it.';
  const [markdown, setMarkdown] = useState(initialMarkdown);
  const [convertedHtml, setConvertedHtml] = useState('');
  const textareaRef = useRef(null); // Create a ref for the textarea

  useEffect(() => {
    localStorage.setItem('markdown', markdown);
  }, [markdown]);

  // Real-time conversion with debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:5000/convert', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ markdown }),
        });
        const data = await response.json();
        setConvertedHtml(data.html);
      } catch (error) {
        console.error('Error converting markdown:', error);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [markdown]);

  return (
    <div className="container">
      <h1>Real-time Markdown Editor</h1>
      <Toolbar markdown={markdown} setMarkdown={setMarkdown} textareaRef={textareaRef} />
      <div className="row">
        <div className="col">
          <h3>Editor</h3>
          <Editor markdown={markdown} setMarkdown={setMarkdown} ref={textareaRef} />
        </div>
        <div className="col">
          <h3>Preview</h3>
          <Preview html={convertedHtml} />
        </div>
      </div>
    </div>
  );
}

export default App;
