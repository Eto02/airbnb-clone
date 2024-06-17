const Chat = () => {
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
      <div className="flex-1">Chat</div>
    </div>
  );
};

export default Chat;
