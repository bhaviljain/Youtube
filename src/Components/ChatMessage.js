import React from "react";
import { userLogo } from "../Contants/utils";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex  gap-2 width-full p-1 rounded-lg px-2  items-center bg-gray-200 shadow-lg m-2">
      <img alt="user" src={userLogo} className="h-8 w-8"/>
      <div className="flex  flex-wrap items-center gap-1 ">
        <p className="font-semibold">{name}</p>
        <p className="text-sm">{message}</p>
      </div>
      
    </div>
  );
};

export default ChatMessage;