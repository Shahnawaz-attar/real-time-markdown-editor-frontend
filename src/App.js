// src/App.js
import React, { useRef } from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import useConvertMarkdown from './hooks/useConvertMarkdown';
import Toolbar from './components/Toolbar';
import Editor from './components/Editor';
import Preview from './components/Preview';
import './App.css';

function App() {
  // 1. Manage Markdown state with localStorage
  const [markdown, setMarkdown] = useLocalStorage(
    'markdown',
    '# Hello, Markdown!\n\nType your Markdown here...'
  );

  // 2. Convert Markdown on the backend with a debounce
  const convertedHtml = useConvertMarkdown(markdown, 300);

  // 3. Ref for the Editor (for toolbar cursor/scroll handling)
  const textareaRef = useRef(null);

  return (
    <div className="container">
      <h1>Real-time Markdown Editor</h1>

      {/* Toolbar modifies the markdown text, needs the textarea ref for selection */}
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
