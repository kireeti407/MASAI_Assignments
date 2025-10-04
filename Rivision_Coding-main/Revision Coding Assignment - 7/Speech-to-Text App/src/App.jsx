import { useState, useEffect, useRef } from 'react'
import './App.css'
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const isSpeechRecognitionSupported = !!SpeechRecognition;

function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const recognitionRef = useRef(null);

  useEffect(() => {
    if (!isSpeechRecognitionSupported) {
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      let finalTranscript = '';
      for (let i = 0; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        }
      }
      setTranscript(finalTranscript);
    };

    recognition.onend = () => {
    
      if (isRecording) {
        recognition.start();
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [isRecording]); 

  const toggleRecording = () => {
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      setTranscript(''); 
      recognitionRef.current.start();
    }
    setIsRecording(!isRecording);
  };

  if (!isSpeechRecognitionSupported) {
    return <div className="fallback">Sorry, your browser does not support the Web Speech API. Please try Chrome or another supported browser.</div>;
  }

  return (
    <>
      <h1>Speech-to-Text App</h1>
      <div className="card">
        <p className="mic-status">
          Mic Status: {isRecording ? <span className="mic-icon red">🔴</span> : <span className="mic-icon green">🟢</span>}
        </p>
        <button onClick={toggleRecording}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </button>
        <div className="transcript-container">
          <h2>Transcript:</h2>
          <p>{transcript || '...'}</p>
        </div>
      </div>
    </>
  )
}

export default App
