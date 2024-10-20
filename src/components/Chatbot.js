// src/components/Chatbot.js
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faTrash } from "@fortawesome/free-solid-svg-icons";
import ResultDisplay from "./ResultDisplay";
import ImageUploader from "./ImageUploader";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [image, setImage] = useState(null);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const savedMessages =
      JSON.parse(localStorage.getItem("chatMessages")) || [];
    setMessages(savedMessages);
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleImageUpload = (imageData) => {
    setImage(imageData);
  };

  const handleUserInput = async (e) => {
    e.preventDefault();
    if (userInput.trim() || image) {
      const newMessage = { text: userInput, image, fromUser: true };
      setMessages((prevMessages) => [newMessage, ...prevMessages]);

      //   const dataToSend = { message: userInput, image };
      //   const response = await fetch('/api/chat', {
      //     method: 'POST',
      //     body: JSON.stringify(dataToSend),
      //     headers: { 'Content-Type': 'application/json' },
      //   }).then((res) => res.json());

      //   const botMessage = { text: response.reply, fromUser: false };
      //   setMessages((prevMessages) => [...prevMessages, botMessage]);

      setUserInput("");
      setImage(null);
    }
  };

  const clearMessages = () => {
    setMessages([]);
    localStorage.removeItem("chatMessages");
    setUserInput("");
    setImage(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen">
      <div className="flex-1 mt-4 mb-5 flex flex-col-reverse overflow-y-auto p-2">
        {messages.map((msg, index) => (
          <ResultDisplay
            key={index}
            result={msg.text}
            image={msg.image}
            fromUser={msg.fromUser}
          />
        ))}
        <div ref={chatEndRef} />
      </div>

      {messages.length > 0 && (
        <div className="flex justify-end mb-20">
          <button
            onClick={clearMessages}
            className="bg-red-500 text-white py-2 px-4 rounded"
          >
            <FontAwesomeIcon icon={faTrash} className="mr-2" />{" "}
            {/* Add the icon */}
            Clear Messages
          </button>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white shadow-md flex justify-center">
        <form
          onSubmit={handleUserInput}
          className="flex items-center w-full max-w-4xl"
        >
          <ImageUploader onImageUpload={handleImageUpload} />
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="border p-2 flex-1 rounded mx-2"
            placeholder="Type your message here..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded flex items-center"
          >
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
