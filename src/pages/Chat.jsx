import React, { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [...messages, userMessage],
    });

    const botMessage = response.data.choices[0].message;
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md p-4 space-y-4">
        <div className="h-96 overflow-y-auto border p-4 space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className={`p-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;