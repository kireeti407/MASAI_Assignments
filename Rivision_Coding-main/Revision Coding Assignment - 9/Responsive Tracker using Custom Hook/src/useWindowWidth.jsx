
import { useState, useEffect } from 'react';

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [resizing, setResizing] = useState(false);

  useEffect(() => {
    let timeoutId;

    const handleResize = () => {
      setWidth(window.innerWidth);
      setResizing(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setResizing(false), 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { width, resizing };
};
