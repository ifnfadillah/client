"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CustomCardHeader } from "@/components/card-header";
import { SendHorizontal, MapPin } from "lucide-react";
import Navbar from "@/components/navbar";
import Typewriter from "typewriter-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Message {
  role: "user" | "bot";
  content: string | JSX.Element;
  quickAsks?: string[];
  mapLink?: string;
}

export default function ChatbotInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const BubbleAsk = [
    "Apa itu Kampung Lingkar Kampus",
    "Kampung Ketawanggede",
    "Kampung Sumbersari",
    "Kampung Keramik Dinoyo",
    "Kampung Cempluk",
    "Event-event Kampung Lingkar Kampus",
    "Ada situs-situs apa saja di sekitar?",
    "Apa saja layanan kesehatan yang ada di sekitar kampung lingkar kampus?",
    "Rekomendasi kuliner yang cocok untuk cuaca saat ini"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleQuickAsk = (question: string) => {
    setInput(question);
  };

  const handleBubbleAsk = (question: string) => {
    setInput(question);
  };

  const handleMapOpen = (mapUrl: string) => {
    window.open(mapUrl, "_blank");
  };

  const handleMessage = async (message: string, isInit = false) => {
    if (!message.trim() && !isInit) return;

    setIsLoading(true);
    setIsBotTyping(true);

    if (!isInit) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "user", content: message },
      ]);
      setInput("");
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "bot",
        content: (
          <Typewriter
            options={{
              strings: [
                "Tunggu sebentar yaa",
                "Kaboo lagi siapin jawabannya...",
              ],
              autoStart: true,
              loop: true,
              delay: 150,
              deleteSpeed: 100,
            }}
          />
        ),
      },
    ]);

    try {
      const response = await fetch(
        "http://localhost:5005/webhooks/rest/webhook",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sender: "unique_user_id", message }),
        }
      );

      if (!response.ok)
        throw new Error("Failed to get a response from the Rasa server");

      const data = await response.json();
      console.log("Response from Rasa:", data);

      let botMessages: Message[] = [];
      let quickAsks: string[] =
        data.find((d: any) => d.custom?.quick_asks)?.custom.quick_asks || [];

      if (data[0]?.custom?.status === "info" && data[0]?.custom?.message) {
        botMessages.push({
          role: "bot",
          content: data[0].custom.message.replace(/\n/g, "<br />"),
          quickAsks,
        });

        // TEKS & LIST (EVENT && KULINER && SITUS)
      } else if (data[0]?.custom?.list) {
        let formattedList = data[0].custom.list.map(
          (item: any, index: number) => (
            <div key={index} className="mb-2">
              <strong>
                {index + 1}. {item.name}
              </strong>
              <p className="text-xs ms-4">{item.desc}</p>
            </div>
          )
        );

        botMessages.push({
          role: "bot",
          content: (
            <div>
              <p>{data[0].custom.text_upper}</p>
              <div className="mt-2">{formattedList}</div>
              <p>{data[0].custom.text_under}</p>
            </div>
          ),
          quickAsks,
        });

        // TEKS & LIST (LAYANAN KESEHATAN)
      } else if (data[0]?.custom?.listLayananKesehatan) {
        let formattedList = data[0].custom.listLayananKesehatan.map(
          (item: any, index: number) => (
            <div key={index} className="mb-2">
              <strong>
                {index + 1}. {item.name}
              </strong>
              <p className="text-xs ms-4 mb-3">
                Jam Operasional: {item.operationalHour}
              </p>
              <p className="text-xs ms-4">Lokasi: {item.lokasiKesehatan}</p>
            </div>
          )
        );

        botMessages.push({
          role: "bot",
          content: (
            <div>
              <p>{data[0].custom.text_upper}</p>
              <div className="mt-2">{formattedList}</div>
              <p>{data[0].custom.text_under}</p>
            </div>
          ),
          quickAsks,
        });

        // TEKS & MAPS
      } else if (data[0]?.custom?.text && data[0]?.custom?.maps) {
        const mapLink = data[0].custom.maps;
        const mapName = data[0].custom.name;

        botMessages.push({
          role: "bot",
          content: (
            <div>
              <Typewriter
                options={{
                  strings: data[0].custom.text,
                  autoStart: true,
                  delay: 25,
                }}
              />
              <div className="mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 text-xs"
                  onClick={() => handleMapOpen(mapLink)}
                >
                  <MapPin className="h-4 w-4" /> Lihat Lokasi {mapName}
                </Button>
              </div>
            </div>
          ),
          quickAsks,
          mapLink,
        });
      } else if (data[0]?.text) {
        botMessages.push({
          role: "bot",
          content: (
            <Typewriter
              options={{
                strings: data[0].text.replace(/\n/g, "<br />"),
                autoStart: true,
                delay: 25,
              }}
            />
          ),
          quickAsks,
        });
      }

      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        ...botMessages,
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { role: "bot", content: "Maaf, terjadi kesalahan. Coba lagi." },
      ]);
    } finally {
      setIsLoading(false);
      setIsBotTyping(false);
    }
  };

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      handleMessage("/greet", true);
    }
  }, []);

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
        const response = await fetch(
          "http://localhost:5005/webhooks/rest/webhook",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sender: "unique_user_id",
              message: "/greet",
            }),
          }
        );

        if (!response.ok)
          throw new Error("Failed to get initial greeting from Rasa server");

        const data = await response.json();
        if (data && data.length > 0) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { role: "bot", content: data[0].text },
          ]);
        }
      } catch (error) {
        console.error("Error getting initial greeting:", error);
      }
    };

    initializeChat();
  }, []);

  return (
    <>
      <div className="flex items-center justify-center bg-gray-100 dark:bg-black py-4 px-4">
        <Card className="w-full h-[95vh] flex flex-col">
          <CustomCardHeader />
          <CardContent className="flex-grow overflow-hidden py-2">
            <ScrollArea className="h-full pr-4">
              {messages.map((message, index) => (
                <div key={index}>
                  <div
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    } mb-4`}
                  >
                    <div
                      className={`flex ${
                        message.role === "user"
                          ? "flex-row-reverse"
                          : "flex-row"
                      } items-end`}
                    >
                      <Avatar
                        className={`${
                          message.role === "user" ? "ml-2" : "mr-2"
                        }`}
                      >
                        <AvatarFallback>
                          {message.role === "user" ? "U" : "K"}
                        </AvatarFallback>
                        <AvatarImage
                          src={
                            message.role === "user"
                              ? "/user-default.png"
                              : "/bot.png"
                          }
                        />
                      </Avatar>
                      <div
                        className={`max-w-[65%] rounded-lg p-3 text-xs ${
                          message.role === "user"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200 dark:bg-violet-700 dark:text-white text-black"
                        }`}
                      >
                        {typeof message.content === "string" ? (
                          message.content
                        ) : (
                          <div>{message.content}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {messages.length > 0 &&
                (messages[messages.length - 1]?.quickAsks?.length ?? 0) > 0 && (
                  <div className="ms-12 max-w-[70%] mt-4 mb-4 flex flex-wrap gap-2">
                    {messages[messages.length - 1]?.quickAsks?.map(
                      (ask, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuickAsk(ask)}
                        >
                          {ask}
                        </Button>
                      )
                    )}
                  </div>
                )}

              <div ref={messagesEndRef} />
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <div className="w-full space-y-3">
              <Carousel opts={{ align: "start" }} className="mx-10">
                <CarouselContent>
                  {BubbleAsk.map((ask, idx) => (
                    <div key={idx + 1} className="flex gap-6 ms-4">
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                        onClick={() => handleBubbleAsk(ask)}
                      >
                        {ask}
                      </Button>
                    </div>
                  ))}
                </CarouselContent>
                <div className="flex justify-between">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
              <form
                onSubmit={handleSubmit}
                className="flex w-full space-x-2 mt-4"
              >
                <Input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Tuliskan pertanyaanmu di sini..."
                  className="flex-grow placeholder:text-xs text-xs"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2"
                >
                  Kirim <SendHorizontal className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
