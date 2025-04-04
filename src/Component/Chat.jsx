import React from "react";
import { BsChatDots } from "react-icons/bs";

const Chat = () => {
  const openChat = () => {
    window.open(
      "https://landbot.online/v3/H-2863940-L66SGHS3YDSGIBCS/index.html",
      "_blank"
    );
  };

  return (
    <div
      className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110"
      onClick={openChat}
      title="Chat with us"
    >
      <BsChatDots size={24} />
    </div>
  );
};

export default Chat;
