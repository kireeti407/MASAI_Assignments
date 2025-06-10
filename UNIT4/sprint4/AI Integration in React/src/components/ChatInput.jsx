import React, { useState } from 'react';
import { useChat } from '../context/ChatContext';
import './ChatInput.css';

const ChatInput = () => {
  const { addMessage } = useChat();
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = {
      role: 'user',
      text: input,
      timestamp: new Date().toISOString(),
    };
    addMessage(userMessage);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_GEMINI_API_KEY}`,
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      const data = await res.json();
      const aiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

      addMessage({
        role: 'assistant',
        text: aiText,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      addMessage({
        role: 'assistant',
        text: 'Error getting response.',
        timestamp: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-input">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
        disabled={loading}
        aria-label="Chat message input"
      />
      <button onClick={sendMessage} disabled={loading}>
        {loading ? '...' : 'Send'}
      </button>
    </div>
  );
};

export default ChatInput;
