import Chat from "../component/Chat";
import List from "../component/List";

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-scroll lg:overflow-y-visible">
      <div
        className="basis-3/5 overflow-y-visible lg:overflow-y-scroll flex-none h-max lg:h-full"
        id="left"
      >
        <div className="pr-12 flex flex-col gap-12 pb-12">
          <div className="flex justify-between items-center">
            <h1 className="font-light">User Information</h1>
            <button className="py-3 px-6 bg-[#84DCC6] cursor-pointer border-0">
              Update Profile
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <span className=" flex items-center gap-5">
              Avatar:
              <img
                className="w-10 h-10 rounded-[50%] object-cover"
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="avatar"
              />
            </span>
            <span className=" flex items-center gap-5">
              Username: <b>John Doe</b>
            </span>
            <span className=" flex items-center gap-5">
              Email: <b>john@mail.com</b>
            </span>
          </div>
          <div className="flex justify-between">
            <h1 className="font-light">My List</h1>
            <button className="py-3 px-6 bg-[#84DCC6] cursor-pointer border-0">
              Create New Post
            </button>
          </div>
          <List />
          <div>
            <h1 className="font-light">Saved List</h1>
          </div>
        </div>
      </div>
      <div className="basis-2/5 h-full flex-none bg-[#84DCC6]" id="right">
        <div className="px-5 h-full">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default Profile;
