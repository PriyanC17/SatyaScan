import React, { useState } from 'react';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = userMessage.trim();

    if (message) {
      // Predefined response
      const botResponse = {
        user: message,
        bot: "A DeepFake is a type of artificial intelligence (AI) technology that manipulates or generates images, audio, and videos to create content that appears real but is entirely fabricated or altered. The term 'deepfake' combines 'deep learning' with 'fake.' Deep learning techniques, like Generative Adversarial Networks (GANs), create realistic forgeries.",
      };

      setChatLog([...chatLog, botResponse]);
      setUserMessage('');
    }
  };

  return (
    <>
      {/* Chatbot Icon */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleChatbot}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
        >
          💬
        </button>
      </div>

      {/* Chatbot Box */}
      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-gradient-to-b from-gray-800 to-gray-900 text-white rounded-lg shadow-lg z-50">
          <div className="p-4 border-b border-gray-700">
            <h4 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Satya-Scan Chatbot
            </h4>
          </div>
          <div className="p-4 max-h-64 overflow-y-auto">
            {/* Chat messages */}
            {chatLog.length === 0 ? (
              <p className="text-sm text-gray-400">
                Ask me anything about DeepFakes!
              </p>
            ) : (
              chatLog.map((log, index) => (
                <div key={index} className="mb-3">
                  <p className="font-semibold bg-gradient-to-r from-blue-300 to-pink-500 bg-clip-text text-transparent">
                    You: {log.user}
                  </p>
                  <p className="text-sm bg-gray-700 p-2 rounded-lg mt-2">
                    {log.bot}
                  </p>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSendMessage} className="p-3 border-t border-gray-700">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your question..."
              className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="mt-3 w-full py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-500 hover:to-cyan-500 transition-all duration-300"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
