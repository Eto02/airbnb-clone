import React, { FormEvent, useContext, useState } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";
import myAxios from "../lib/axiosConfig";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../component/uploadWidget";

const EditProfile: React.FC = () => {
  const { currentUser, updateUser } = useContext(
    AuthContext
  ) as AuthContextType;
  const [error, setError] = useState<string>("");
  const [avatar, setAvatar] = useState<string[]>([]);

  const nav = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, email, password } = Object.fromEntries(formData) as {
      username: string;
      email: string;
      password: string;
    };
    try {
      const res = await myAxios.put(`/api/user/${currentUser?.id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      updateUser(res.data?.data);
      nav("/profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data;
        console.log(errorMessage);
        if (typeof errorMessage !== "string") {
          errorMessage = error.response?.data?.errors[0]?.message;
        }
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="h-full flex">
      <div className="basis-3/5 flex items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="flex flex-col gap-1">
            <label htmlFor="username">Username</label>
            <input
              className="p-2 rounded border-1 border-solid border-gray-500"
              id="username"
              name="username"
              type="text"
              defaultValue={currentUser?.username}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input
              className="p-2 rounded border-1 border-solid border-gray-500"
              id="email"
              name="email"
              type="email"
              defaultValue={currentUser?.email}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Password</label>
            <input
              className="p-2 rounded border-1 border-solid border-gray-500"
              id="password"
              name="password"
              type="password"
            />
          </div>
          <button className="p-2 rounded border-0 bg-[teal] text-white font-bold cursor-pointer">
            Update
          </button>
          {error && <span>{error}</span>}
        </form>
      </div>
      <div className="basis-2/5 bg-[#84DCC6] flex flex-col gap-5 items-center justify-center">
        <img
          src={avatar[0] || currentUser?.avatar || "/noavatar.jpg"}
          alt=""
          className="w-1/2 object-cover"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "ducykopvh",
            uploadPreset: "estate",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default EditProfile;
