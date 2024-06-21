import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 flex flex-col  gap-5  overflow-y-scroll ">
        <h1>Messages</h1>
        <div className="bg-white p-3 mr-1 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <span className="font-bold">John Doe</span>
          <p>lorem</p>
        </div>
        <div className="bg-white p-3  mr-1 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <span className="font-bold">John Doe</span>
          <p>lorem</p>
        </div>
        <div className="bg-white p-3  mr-1 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <span className="font-bold">John Doe</span>
          <p>lorem</p>
        </div>
        <div className="bg-white p-3  mr-1 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <span className="font-bold">John Doe</span>
          <p>lorem</p>
        </div>
        <div className="bg-white p-3  mr-1 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <span className="font-bold">John Doe</span>
          <p>lorem</p>
        </div>
        <div className="bg-white p-3  mr-1 rounded-lg flex items-center gap-5 cursor-pointer">
          <img
            className="w-10 h-10 rounded-[50%] object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
          <span className="font-bold">John Doe</span>
          <p>lorem</p>
        </div>
      </div>
      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between">
          <div className=" bg-[#99d4c6] p-2 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                className="w-7 h-7 rounded-[50%] object-cover"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
              John Doe
            </div>
            <span onClick={() => setChat(false)} className="cursor-pointer">
              X
            </span>
          </div>
          <div className="h-[225px] overflow-y-scroll p-4 flex flex-col gap-5">
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span className="text-xs bg-[#84DCC6]/50 p-[2px]">
                5 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span className="text-xs bg-[#84DCC6]/50 p-[2px]">
                5 hour ago
              </span>
            </div>
            <div className="w-1/2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span className="text-xs bg-[#84DCC6]/50 p-[2px]">
                5 hour ago
              </span>
            </div>
            <div className="w-1/2 self-end text-right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <span className="text-xs bg-[#84DCC6]/50 p-[2px]">
                5 hour ago
              </span>
            </div>
          </div>
          <div className="border-solid border-t-2 border-[#51b69d] flex items-center justify-between">
            <textarea
              className="basis-3/4 h-full border-0 p-2"
              name=""
              id=""
            ></textarea>
            <button className="basis-1/4 bg-[#51b69d] h-full border-0 cursor-pointer">
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
