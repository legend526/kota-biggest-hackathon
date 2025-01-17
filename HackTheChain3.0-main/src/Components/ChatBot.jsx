import React, { useState } from 'react';
import axios from 'axios';

function Chatbot({ onClose }) {
    const [userMessage, setUserMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const handleUserMessage = (e) => {
        setUserMessage(e.target.value);
    };

    const sendMessageToBot = async () => {
        const newMessages = [...messages, { text: userMessage, sender: 'user' }];
        setMessages(newMessages);

        try {
            const response = await axios.post('http://127.0.0.1:8000/chatbot/', {
                message: userMessage
            });
            const botMessage = response.data.body.bot_response;

            setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
        } catch (error) {
            console.error("Error sending message to bot:", error);
            setMessages([ 
                ...newMessages,
                { text: "Sorry, something went wrong.", sender: 'bot' }
            ]);
        }
        setUserMessage('');
    };

    return (
        <div className="sticky bottom-10 left-10 bg-gradient-to-br from-gray-900 via-indigo-900 to-cyan-800 text-white rounded-lg shadow-2xl p-6 w-96 z-50">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold text-white mb-4">AI Assistant</h2>
                <button onClick={onClose} className="text-red-400 hover:text-red-500 text-2xl font-bold transform hover:scale-110 transition-transform">&#10006;</button>
            </div>
            <div className="mb-4 space-y-4 h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-700 scrollbar-track-gray-800">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs px-4 py-3 rounded-xl shadow-lg text-sm ${
                                message.sender === 'user'
                                    ? 'bg-gradient-to-r from-teal-400 to-green-500 text-gray-900'
                                    : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white'
                            }`}
                        >
                            <p>{message.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 relative">
                <input
                    type="text"
                    value={userMessage}
                    onChange={handleUserMessage}
                    placeholder="Type your message..."
                    className="w-full p-3 rounded-full border-0 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
                <button
                    onClick={sendMessageToBot}
                    className="absolute top-1/2 transform -translate-y-1/2 right-3 bg-gradient-to-br from-indigo-600 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chatbot;
