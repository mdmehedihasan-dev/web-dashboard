// src/Dashboard/chat/Chat.jsx
import React, { useEffect, useState, useRef } from "react";

/**
 * Simple demo data and helper to replace the missing ../../demo/data module.
 * getDemoResponse accepts paths like:
 *  - "/chat/conversations" -> returns an array of conversations
 *  - `/chat/conversations/<id>/messages` -> returns messages for that conversation
 */
const demoData = {
  conversations: [
    {
      _id: "c1",
      otherParticipant: {
        _id: "u2",
        firstName: "Demo Alice",
        profileImage: null,
      },
      lastMessage: {
        _id: "m1",
        content: "Hey! Welcome to demo chat.",
        createdAt: new Date().toISOString(),
      },
    },
    {
      _id: "c2",
      otherParticipant: {
        _id: "u3",
        firstName: "Demo Bob",
        profileImage: null,
      },
      lastMessage: {
        _id: "m3",
        content: "This is another conversation.",
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(), // 1 hour ago
      },
    },
  ],
  messagesByConversation: {
    c1: [
      {
        _id: "m1",
        content: "Hey! Welcome to demo chat.",
        sender: { _id: "u2", firstName: "Demo Alice" },
        createdAt: new Date(Date.now() - 1000 * 60 * 5).toISOString(), // 5 min ago
        conversationId: "c1",
      },
      {
        _id: "m2",
        content: "Thanks — nice to meet you!",
        sender: { _id: "u1", firstName: "You" },
        createdAt: new Date(Date.now() - 1000 * 60 * 3).toISOString(), // 3 min ago
        conversationId: "c1",
      },
    ],
    c2: [
      {
        _id: "m3",
        content: "This is another conversation.",
        sender: { _id: "u3", firstName: "Demo Bob" },
        createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
        conversationId: "c2",
      },
    ],
  },
};

function getDemoResponse(path) {
  // Basic router
  if (path === "/chat/conversations") {
    // return a deep copy to avoid mutations between renders
    return JSON.parse(JSON.stringify(demoData.conversations));
  }

  const convMessagesMatch = path.match(/^\/chat\/conversations\/(.+)\/messages$/);
  if (convMessagesMatch) {
    const convId = convMessagesMatch[1];
    return JSON.parse(JSON.stringify(demoData.messagesByConversation[convId] || []));
  }

  // default fallback
  return null;
}

const Chat = () => {
  // Safe parse for user from localStorage
  let parsedUser;
  try {
    parsedUser = JSON.parse(localStorage.getItem("user"));
  } catch (err) {
    parsedUser = null;
  }
  const user = parsedUser || { email: "demo@example.com", firstName: "You", _id: "u1" };

  const [conversations, setConversations] = useState([]);
  const [activeConversation, setActiveConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [convoLoading, setConvoLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // Fetch demo conversations on mount
  useEffect(() => {
    try {
      const data = getDemoResponse("/chat/conversations") || [];
      setConversations(data);
      if (data.length > 0) {
        setActiveConversation(data[0]._id);
      }
    } catch (error) {
      console.error("Error loading demo conversations:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch demo messages when active conversation changes
  useEffect(() => {
    if (!activeConversation) return;

    try {
      const data = getDemoResponse(`/chat/conversations/${activeConversation}/messages`) || [];
      setMessages(data);
    } catch (error) {
      console.error("Error loading demo messages:", error);
      setMessages([]);
    }
  }, [activeConversation]);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim() || !activeConversation) return;

    const messageContent = message.trim();
    setMessage("");

    const tempId = `temp-${Date.now()}`;
    const optimisticMessage = {
      _id: tempId,
      tempId,
      content: messageContent,
      sender: {
        _id: user._id || "u1",
        firstName: user.firstName || user.email,
      },
      createdAt: new Date().toISOString(),
      conversationId: activeConversation,
    };

    setMessages((prev) => [...prev, optimisticMessage]);

    setConversations((prev) =>
      prev.map((conv) =>
        conv._id === activeConversation ? { ...conv, lastMessage: optimisticMessage } : conv
      )
    );

    // Demo bot reply (simulate)
    setTimeout(() => {
      const other = getActiveConversationData()?.otherParticipant || { _id: "u2", firstName: "Demo User" };
      const botMessage = {
        _id: `demo-${Date.now()}`,
        content: `Thanks for your message: "${messageContent}"`,
        sender: { _id: other._id, firstName: other.firstName },
        createdAt: new Date().toISOString(),
        conversationId: activeConversation,
      };

      setMessages((prev) => [
        ...prev.filter((m) => m._id !== tempId),
        optimisticMessage,
        botMessage,
      ]);

      setConversations((prev) =>
        prev.map((conv) =>
          conv._id === activeConversation ? { ...conv, lastMessage: botMessage } : conv
        )
      );
    }, 700);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
  };

  const getActiveConversationData = () => conversations.find((c) => c._id === activeConversation);

  const isMyMessage = (msg) => msg.sender?.firstName === (user.firstName || user.email);

  useEffect(() => {
    // any time conversation changes, stop loading state for the convo
    setConvoLoading(false);
  }, [activeConversation]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="font-normal text-[13px] text-black-400 w-full p-5 bg-white rounded-xl text-center mt-[50px]">
          Loading conversations...
        </p>
      </div>
    );
  }

  return (
    <>
      <h1 className="font-bold text-[17px] w-full mt-10 mb-4">My Chat</h1>

      <div className="flex flex-col items-start bg-white rounded-2xl md:flex-row">
        {/* Conversations sidebar */}
        <div className="justify-between flex flex-col bg-white rounded-2xl md:w-[25%] w-full">
          <h1 className="font-bold text-[17px] w-full px-4 h-[57px] border-b border-[#EEEEF0] flex items-center">
            Conversations
          </h1>
          <div className="h-[66vh] overflow-auto chatconvo">
            {conversations.length === 0 && (
              <div className="p-10 text-center text-red-400">No Conversations Found</div>
            )}
            {conversations.map((conv) => (
              <div
                key={conv._id}
                className={`px-4 py-3 flex items-center w-full gap-2 border-b border-[#EEEEF0] relative cursor-pointer ${
                  activeConversation === conv._id ? "bg-gray-50" : ""
                } chatbox`}
                onClick={() => {
                  setConvoLoading(true);
                  setActiveConversation(conv._id);
                }}
              >
                <div className="w-[80%] flex items-center gap-2">
                  <img
                    src={
                      conv.otherParticipant?.profileImage ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        conv?.otherParticipant?.firstName || "User"
                      )}&background=0D8ABC&color=fff`
                    }
                    className="object-cover w-10 h-10 rounded-full"
                    alt={conv.otherParticipant?.firstName || "User"}
                  />
                  <div>
                    <h3 className="flex items-center justify-between mb-2">
                      <span className="font-bold">{conv.otherParticipant?.firstName || "Unknown User"}</span>
                      <span className="text-[11px] text-[#92939E]">
                        {conv.lastMessage?.createdAt ? formatTime(conv.lastMessage.createdAt) : ""}
                      </span>
                    </h3>
                    <p className="truncate text-[#92939E] text-[12px] w-[70%]">
                      {conv.lastMessage?.content || "Start a conversation"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        {activeConversation ? (
          <div className="justify-between flex flex-col bg-white rounded-r-2xl md:w-[75%] w-full border-l border-t md:border-t-0">
            <div className="flex justify-between px-4 py-2 border-b border-gray-200 sm:items-center">
              <div className="flex items-center space-x-4">
                <div>
                  <img
                    src={
                      getActiveConversationData()?.otherParticipant?.profileImage ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        getActiveConversationData()?.otherParticipant?.firstName || "User"
                      )}&background=0D8ABC&color=fff`
                    }
                    alt=""
                    className="object-cover w-10 h-10 rounded-full"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <div className="flex items-center mt-1 text-sm">
                    <span className="font-semibold">
                      {getActiveConversationData()?.otherParticipant?.firstName || "Unknown User"}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">Demo mode</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex flex-col space-y-4 p-5 overflow-y-auto h-[60vh]">
              {messages.map((msg) => (
                <div key={msg._id} className="chat-message">
                  <div className={`flex ${isMyMessage(msg) ? "justify-end" : "justify-start"}`}>
                    <div className={`flex flex-col ${isMyMessage(msg) ? "items-end" : "items-start"}`}>
                      {!isMyMessage(msg) && (
                        <span className="mr-1 text-[10px] font-semibold text-gray-400">
                          {msg.sender?.firstName || "User"}:
                        </span>
                      )}
                      <div
                        className={`px-3 py-2 rounded-lg max-w-xs ${
                          isMyMessage(msg) ? "bg-[var(--primary-color)] text-black" : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {msg.content}
                      </div>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        {formatTime(msg.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="px-4 pt-2 pb-2 border-t border-gray-200 sm:mb-0">
              <div className="flex items-center justify-between gap-2">
                <textarea
                  placeholder="Write your message!"
                  className="w-full h-[50px] !pl-4 border border-[#EEEEF0] resize-none rounded-xl outline-none"
                  style={{ padding: "10px" }}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button
                  className={`p-2 rounded-xl ${
                    message.trim() === "" ? "bg-gray-400 cursor-not-allowed" : "bg-[var(--primary-color)] hover:bg-[var(--primary-dark)]"
                  }`}
                  onClick={handleSendMessage}
                  disabled={message.trim() === ""}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:w-[75%] w-full flex items-center justify-center h-64">
            <p className="text-red-500">No active conversation selected</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
