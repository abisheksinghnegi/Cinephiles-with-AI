import React, { useState } from 'react';
import axios from 'axios';
import "./AI.css";
import robo from "../images/r.png";

const AI = () => {
  const [question, setquestion] = useState("");
  const [ChatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false); // New state for loading

  async function generateAnswer() {
    if (!question.trim()) return;
    setChatHistory(prev => [...prev, { type: 'question', content: question }]);
    setquestion(""); // Clear input field
    setLoading(true); // Start loading

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyB2ysNSmBhT4ZfJyzgfZCkodxLzcfEzNm0`,
        method: "post",
        data: {
          contents: [{
            "parts": [{ "text": question }]
          }],
        },
      });

      const aiResponse = response['data']['candidates'][0]['content']['parts'][0]['text'];
      setChatHistory(prev => [...prev, { type: 'answer', content: aiResponse }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { type: 'answer', content: "Sorry, something went wrong. Please try again later." }]);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      <div id='container1'>
        <img src={robo} alt="r" id='robo' />
        <div id='container2'>
          <h1 id='a'>ASK FOR RECOMMENDATION</h1>
          {/* Chat History */}
          <div id="chat-history">
            {ChatHistory.map((chat, index) => (
              <div
                key={index}
                className={chat.type === 'question' ? 'user-message' : 'ai-message'}
              >
                {chat.content}
              </div>
            ))}
            {/* Show "Thinking..." when loading */}
            {loading && <div className="ai-message">Thinking...</div>}
          </div>

          <div id='ask'>
            <textarea
              id="ques"
              value={question}
              onChange={(e) => setquestion(e.target.value)}
              placeholder='ask'
            />
            <button id='btn' onClick={generateAnswer}>ASK</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AI;
