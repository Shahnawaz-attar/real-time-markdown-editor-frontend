// hooks/useLocalStorage.js
import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? saved : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
