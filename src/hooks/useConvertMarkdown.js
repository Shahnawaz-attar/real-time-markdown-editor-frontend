import { useState, useEffect } from 'react';
import { convertMarkdown } from '../services/markdownService';

export default function useConvertMarkdown(markdown, delay = 300) {
  const [convertedHtml, setConvertedHtml] = useState('');

  useEffect(() => {
    const timer = setTimeout(async () => {
      try {
        const data = await convertMarkdown(markdown);
        setConvertedHtml(data.html);
      } catch (error) {
        console.error('Error converting markdown:', error);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [markdown, delay]);

  return convertedHtml;
}
