"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CustomCardHeader } from "@/components/card-header";
import { SendHorizontal } from "lucide-react";
import Navbar from "@/components/navbar";

interface Message {
  role: 'user' | 'bot';
  content: string | JSX.Element;
}

export default function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll saat ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleMessage = async (message: string) => {
    if (!message.trim()) return;

    setIsLoading(true);
    setIsBotTyping(true);

    // **PENTING:** Tambahkan pesan user ke state dan pertahankan history sebelumnya
    setMessages((prevMessages) => [...prevMessages, { role: "user", content: message }]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: "unique_user_id", message: message }),
      });

      if (!response.ok) throw new Error("Failed to get a response from the Rasa server");

      const data = await response.json();
      console.log("Response from Rasa:", data);

      let botMessages: Message[] = [];

      // Jika respons adalah informasi event tanpa list
      if (data[0]?.custom?.status === "info" && data[0]?.custom?.message) {
        botMessages.push({ role: "bot", content: data[0].custom.message });
      } 
      
      // Jika respons berisi daftar kuliner
      else if (data[0]?.custom?.list) {
        let formattedList = data[0].custom.list.map((item: any, index: number) => (
          <div key={index} className="mb-2 p-2 border-b">
            <strong>{index + 1}. {item.name}</strong>
            <p className="text-sm">{item.desc}</p>
          </div>
        ));

        botMessages.push({
          role: "bot",
          content: (
            <div>
              <p>{data[0].custom.text}</p>
              <div className="mt-2">{formattedList}</div>
            </div>
          ),
        });
      } 
      
      else if (data[0]?.text) {
        botMessages.push({ role: "bot", content: data[0].text });
      }

      setMessages((prevMessages) => [...prevMessages, ...botMessages]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [...prevMessages, { role: "bot", content: "Maaf, terjadi kesalahan. Coba lagi." }]);
    } finally {
      setIsLoading(false);
      setIsBotTyping(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleMessage(input);
  };

  const hasInitialized = useRef(false);

  useEffect(() => {
    const initializeChat = async () => {
      if (hasInitialized.current) return; 
      hasInitialized.current = true; 
      try {
        const response = await fetch("http://localhost:5005/webhooks/rest/webhook", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender: "unique_user_id", message: "/greet" }),
        });
  
        if (!response.ok) throw new Error("Failed to get initial greeting from Rasa server");
  
        const data = await response.json();
        if (data && data.length > 0) {
          setMessages((prevMessages) => [...prevMessages, { role: "bot", content: data[0].text }]);
        }
      } catch (error) {
        console.error("Error getting initial greeting:", error);
      }
    };
  
    initializeChat();
  }, []);
  
  

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center bg-gray-100 py-4 px-4">
        <Card className="w-full max-w-xl h-[85vh] flex flex-col">
          <CustomCardHeader />
          <CardContent className="flex-grow overflow-hidden py-2">
            <ScrollArea className="h-full pr-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-4`}>
                  <div className={`flex ${message.role === "user" ? "flex-row-reverse" : "flex-row"} items-end`}>
                    <Avatar className={`${message.role === "user" ? "ml-2" : "mr-2"}`}>
                      <AvatarFallback>{message.role === "user" ? "U" : "K"}</AvatarFallback>
                      <AvatarImage src={message.role === "user" ? "/user-default.jpg" : "/bot.jpg"} />
                    </Avatar>
                    <div className={`max-w-[80%] rounded-lg p-3 text-sm ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}>
                      {typeof message.content === "string" ? message.content : <div>{message.content}</div>}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form onSubmit={handleSubmit} className="flex w-full space-x-2">
              <Input value={input} onChange={handleInputChange} placeholder="Tuliskan pertanyaanmu disini..." className="flex-grow placeholder:text-sm text-sm" disabled={isLoading} />
              <Button type="submit" disabled={isLoading} className="flex items-center gap-2">Kirim<SendHorizontal className="h-4 w-4" /></Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
