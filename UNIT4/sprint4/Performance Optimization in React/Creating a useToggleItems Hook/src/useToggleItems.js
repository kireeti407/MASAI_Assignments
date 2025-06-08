
import { useState } from 'react';
export const useToggleItems = (initialValue, initialPosition = 0) => {
  const [index, setIndex] = useState(initialPosition);
  const toggleState = () => {
    setIndex((prevIndex) => (prevIndex + 1) % initialValue.length);
  };
  const currentItem = initialValue[index];
  return [currentItem, toggleState];
};
