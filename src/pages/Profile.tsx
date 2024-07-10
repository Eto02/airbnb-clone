import React, { Suspense, useContext } from "react";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import Chat from "../components/Chat";
import List from "../components/List";
import { AuthContext, AuthContextType } from "../context/authContext";
import myAxios from "../lib/axiosConfig";
import { LoaderPostChatData } from "../lib/loaders";

const Profile: React.FC = () => {
  const nav = useNavigate();
  const { currentUser, updateUser } = useContext(
    AuthContext
  ) as AuthContextType;
  const data = useLoaderData() as LoaderPostChatData;
  const handleLoogout = async (): Promise<void> => {
    try {
      await myAxios.post("/api/auth/logout");
      updateUser(null);
      nav("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col lg:flex-row h-full overflow-y-scroll lg:overflow-y-visible">
      <div
        className="basis-3/5 overflow-y-visible lg:overflow-y-scroll flex-none h-max lg:h-screen "
        id="left"
      >
        <div className="pr-12 flex flex-col gap-10 pb-12">
          <div className="flex justify-between items-center">
            <h1 className="font-light">User Information</h1>
            <Link
              to="/profile/update"
              className="py-3 px-6 bg-[#84DCC6] cursor-pointer border-0"
            >
              Update Profile
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <span className=" flex items-center gap-5">
              Avatar:
              <img
                className="w-10 h-10 rounded-[50%] object-cover"
                src={currentUser?.avatar || "/noavatar.jpg"}
                alt="avatar"
              />
            </span>
            <span className=" flex items-center gap-5">
              Username: <b>{currentUser?.username}</b>
            </span>
            <span className=" flex items-center gap-5">
              Email: <b>{currentUser?.email}</b>
            </span>
            <button
              onClick={handleLoogout}
              className="w-[100px] bg-[teal] border-0 text-white px-5 py-2 cursor-pointer rounded-md"
            >
              Logout
            </button>
          </div>
          <div className="flex justify-between">
            <h1 className="font-light">My List</h1>
            <Link to="/create/post">
              <button className="py-3 px-6 bg-[#84DCC6] cursor-pointer border-0">
                Create New Post
              </button>
            </Link>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading package location!</p>}
            >
              {(postResponse) => <List items={postResponse.data.data.post} />}
            </Await>
          </Suspense>

          <div>
            <h1 className="font-light">Saved List</h1>
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading package location!</p>}
              >
                {(postResponse) => (
                  <List items={postResponse.data.data.savedPost} />
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
      <div className="basis-2/5 h-screen flex-none bg-[#84DCC6]" id="right">
        <div className="px-5 h-full">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.chatResponse}
              errorElement={<p>Error loading chats!</p>}
            >
              {(chatResponse) => <Chat chats={chatResponse.data.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Profile;
