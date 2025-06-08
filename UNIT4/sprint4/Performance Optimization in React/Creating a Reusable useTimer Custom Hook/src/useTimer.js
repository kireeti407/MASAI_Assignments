
import { useState, useRef, useCallback } from 'react';
export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false); 
  const intervalRef = useRef(null);
  const startTimer = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTimer((prevTime) => prevTime + 1);
      }, 1000);
    }
  }, [isRunning]);
  const stopTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, []);
  const resetTimer = useCallback(() => {
    stopTimer(); 
    setTimer(0);
  }, [stopTimer]);

  return { timer, isRunning, startTimer, stopTimer, resetTimer };
};
