import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hey there! I\'m Sparky. Need help finding the right bike or an upgrade?', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(inputText);
    
    const modelMsg: ChatMessage = { role: 'model', text: responseText, timestamp: new Date() };
    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-brand-neon text-brand-darker hover:scale-110'
        }`}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-brand-dark border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden h-[500px]">
          {/* Header */}
          <div className="bg-brand-gray/50 p-4 border-b border-white/10 flex items-center gap-2">
            <Bot className="h-5 w-5 text-brand-neon" />
            <h3 className="font-semibold text-white">Ask Sparky</h3>
            <span className="text-xs ml-auto text-brand-neon bg-brand-neon/10 px-2 py-1 rounded-full">AI Assistant</span>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-neon text-brand-darker rounded-br-none'
                      : 'bg-gray-700 text-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-700 rounded-2xl px-4 py-2 rounded-bl-none flex items-center space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-brand-darker border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask about Sur-Ron, repairs..."
                className="flex-1 bg-gray-800 border-none rounded-full px-4 py-2 text-sm text-white focus:ring-2 focus:ring-brand-neon outline-none"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="p-2 bg-brand-neon text-brand-darker rounded-full hover:bg-brand-neon/80 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
