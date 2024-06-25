import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myAxios from "../lib/axiosConfig";
import axios from "axios";

interface LoginData {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [erorr, setErorr] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const nav = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setErorr("");
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const data: LoginData = {
      username,
      password,
    };

    try {
      const res = await myAxios.post("/api/auth/login", data);
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      nav("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data?.errors;
        if (typeof errorMessage !== "string")
          errorMessage = error.response?.data?.errors[0]?.message;
        setErorr(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-full flex">
      <div className="basis-3/5 h-full flex items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="username"
            type="text"
            placeholder="Username"
            required
            minLength={3}
            maxLength={10}
          />
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button
            disabled={isLoading}
            className="p-3 rounded border-0 bg-[teal] text-white font-bold cursor-pointer"
          >
            Login
          </button>
          {erorr && <span className="text-red-500/50">{erorr}</span>}
          <Link className="text-sm text-gray-border-gray-400" to="/register">
            {"Don't"} you have an account?
          </Link>
        </form>
      </div>
      <div className="hidden lg:block lg:basis-2/5 bg-[#84DCC6] relative">
        <img className="absolute w-[115%] right-0 " src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
