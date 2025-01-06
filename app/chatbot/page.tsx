'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { CustomCardHeader } from "@/components/card-header"
import { SendHorizontal } from 'lucide-react'
import Navbar from '@/components/navbar'

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export default function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isBotTyping, setIsBotTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    setIsLoading(true);
    setIsBotTyping(true);
  
    const userMessage: Message = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');
  
    try {
      const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "sender": "unique_user_id",
          "message": input
        }
        ),
      });
  
      if (!response.ok) {
        throw new Error('Failed to get a response from the Rasa server');
      }
  
      const data = await response.json();
  
      if (data && data.length > 0) {
        const botMessage: Message = { role: 'bot', content: data[0].text };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      }
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
      setIsBotTyping(false);
    }
  };
  
  useEffect(() => {
    const initializeChat = async () => {
      try {
        const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "sender": "unique_user_id",
            "message": "/greet"
          }),
        });

        if (!response.ok) {
          throw new Error('Failed to get initial greeting from Rasa server');
        }

        const data = await response.json();
        if (data && data.length > 0) {
          const botMessage: Message = { role: 'bot', content: data[0].text };
          setMessages([botMessage]);
        }
      } catch (error) {
        console.error('Error getting initial greeting:', error);
      }
    };

    initializeChat();
  }, []);

  return (
      <>
      <Navbar />
    <div className="flex items-center justify-center bg-gray-100 py-4 px-4">
      <Card className="w-full max-w-xl h-[80vh] md:h-[85vh] flex flex-col">
        <CustomCardHeader />
        <CardContent className="flex-grow overflow-hidden py-2">
          <ScrollArea className="h-full pr-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`flex ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end`}>
                  <Avatar className={`${message.role === 'user' ? 'ml-2' : 'mr-2'}`}>
                    <AvatarFallback>{message.role === 'user' ? 'U' : 'K'}</AvatarFallback>
                    <AvatarImage src={message.role === 'user' ? '/user-default.jpg' : '/bot.jpg'} />
                  </Avatar>
                  <div className={`max-w-[80%] rounded-lg p-3 text-sm ${message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
            {isBotTyping && (
              <div className="flex justify-start mb-4">
                <div className="flex flex-row items-end">
                  <Avatar className="mr-2">
                    <AvatarFallback>K</AvatarFallback>
                    <AvatarImage src="/bot.jpg" />
                  </Avatar>
                  <div className="max-w-[80%] rounded-lg p-3 bg-gray-200 text-black">
                    <span className="typing-animation">...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="flex w-full space-x-2">
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Tuliskan pertanyaanmu disini..."
              className="flex-grow placeholder:text-sm text-sm"
              disabled={isLoading}
            />
            <Button type="submit" disabled={isLoading} className="flex items-center gap-2">
              Kirim
              <SendHorizontal className="h-4 w-4" />
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
    </>
  )
}


