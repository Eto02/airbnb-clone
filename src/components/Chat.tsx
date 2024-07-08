import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { Chat as ChatType, ChatUser, Message } from "../lib/loaders";
import { AuthContext, AuthContextType } from "../context/authContext";
import myAxios from "../lib/axiosConfig";
import { format } from "timeago.js";
import { SocketContext, SocketContextType } from "../context/SocketContext";
import useNotifStore from "../lib/notificationStore";

const Chat = ({ chats }: { chats: ChatType[] }) => {
  const [chat, setChat] = useState<ChatType | null>(null);
  const { currentUser } = useContext(AuthContext) as AuthContextType;
  const { socket } = useContext(SocketContext) as SocketContextType;

  const messageEndRef = useRef<HTMLDivElement>(null);
  const decrease = useNotifStore((state) => state.decrease);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const handleOpenChat = async (id: string, receiver: ChatUser) => {
    try {
      const res = await myAxios.get("/api/chat/" + id);
      if (!res.data.data.seenBy.includes(currentUser?.id || "")) {
        decrease();
      }
      setChat({ ...res.data.data, receiver });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const text: string = formData.get("text") as string;
    if (!text) return;
    try {
      const res = await myAxios.post("/api/message/" + chat?.id, { text });

      setChat((prev) =>
        prev
          ? {
              ...prev,
              messages: [...prev.messages, res.data.data],
            }
          : null
      );
      form.reset();
      socket?.emit("sendMessage", {
        reciverId: chat?.receiver.id,
        data: res.data.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const read = async () => {
      try {
        await myAxios.put("/api/chat/" + chat?.id);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat && socket) {
      const handleMessage = (data: Message) => {
        if (chat.id === data.chatId) {
          setChat((prev) =>
            prev
              ? {
                  ...prev,
                  messages: [...prev.messages, data],
                }
              : null
          );
          read();
        }
      };

      socket.on("getMessage", handleMessage);

      return () => {
        socket.off("getMessage", handleMessage);
      };
    }
  }, [socket, chat]);

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 flex flex-col  gap-5  overflow-y-scroll ">
        <h1>Messages</h1>
        {chats.map((c) => (
          <div
            key={c.id}
            style={{
              backgroundColor: c.seenBy.includes(currentUser?.id || "")
                ? "white"
                : "teal",
            }}
            className="bg-white p-3 mr-1 rounded-lg flex items-center gap-5 cursor-pointer"
            onClick={() => handleOpenChat(c.id, c.receiver)}
          >
            <img
              className="w-10 h-10 rounded-[50%] object-cover"
              src={c.receiver.avatar || "/noavatar.jpg"}
              alt="avatar"
            />
            <span className="font-bold">{c.receiver.username}</span>
            <p>{c.lastMessage}</p>
          </div>
        ))}
      </div>
      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between">
          <div className=" bg-[teal] p-2 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                className="w-7 h-7 rounded-[50%] object-cover"
                src={chat.receiver.avatar || "noavatar.jpg"}
                alt="avatar"
              />
              {chat.receiver.username}
            </div>
            <span onClick={() => setChat(null)} className="cursor-pointer">
              X
            </span>
          </div>
          <div className="h-[225px] overflow-y-scroll p-4 flex flex-col gap-5">
            {chat.messages.map((message) => (
              <div
                key={message.id}
                className="w-1/2"
                style={{
                  alignSelf:
                    message.userId === currentUser?.id
                      ? "flex-end"
                      : "flex-start",
                  textAlign:
                    message.userId === currentUser?.id ? "right" : "left",
                }}
              >
                <p>{message.text}</p>
                <span className="text-xs bg-[#84DCC6]/50 p-[2px]">
                  {format(message.createdAt)}
                </span>
              </div>
            ))}
            <div ref={messageEndRef}></div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-solid border-t-2 border-[teal] flex items-center justify-between"
          >
            <textarea
              className="basis-3/4 h-full border-0 p-2"
              name="text"
              id="text"
            ></textarea>
            <button className="basis-1/4 bg-[teal] h-full border-0 cursor-pointer">
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chat;
