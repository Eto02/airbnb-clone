import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import React, { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextType } from "../context/authContext";
import myAxios from "../lib/axiosConfig";

interface FileData {
  filename: string;
  id: string;
  path: string;
}

const EditProfile: React.FC = () => {
  const { currentUser, updateUser } = useContext(
    AuthContext
  ) as AuthContextType;
  const [error, setError] = useState<string>("");
  const [avatar, setAvatar] = useState<string[]>([]);
  const [filesSuccess, setFilesSuccess] = useState<FileData[]>([]);

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
        avatar: filesSuccess[0].filename,
      });
      updateUser(res.data?.data);
      nav("/profile");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data;
        if (typeof errorMessage !== "string") {
          errorMessage = error.response?.data?.errors[0]?.message;
        }
        setError(errorMessage);
      }
    }
  };

  return (
    <div className="h-screen flex">
      <div className="basis-3/5 flex items-center justify-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Update Profile</CardTitle>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    defaultValue={currentUser?.username}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={currentUser?.email}
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="password" name="password" type="password" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button type="submit">Deploy</Button>
              {error && <span>{error}</span>}
            </CardFooter>
          </form>
        </Card>
      </div>
      <div className="basis-2/5 bg-[#84DCC6] flex flex-col gap-5 items-center justify-center">
        <img
          src={avatar[0] || currentUser?.avatar || "/noavatar.jpg"}
          alt=""
          className="w-1/2 object-cover"
        />
        <FileUpload setImage={setAvatar} setFilesSuccess={setFilesSuccess} />
      </div>
    </div>
  );
};

export default EditProfile;
