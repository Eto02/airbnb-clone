import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AuthContext, AuthContextType } from "@/context/authContext";
import myAxios from "@/lib/axiosConfig";
import axios from "axios";
import { FormEvent, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface LoginData {
  username: string;
  password: string;
}

interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

export function AuthPage() {
  const [loginError, setLoginError] = useState<string>("");
  const [registerError, setRegisterError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { updateUser } = useContext(AuthContext) as AuthContextType;
  const nav = useNavigate();
  const location = useLocation();
  const [currentTab, setCurrentTab] = useState(
    location.pathname === "/login" ? "login" : "register"
  );

  useEffect(() => {
    if (location.pathname === "/login") {
      setCurrentTab("login");
    } else if (location.pathname === "/register") {
      setCurrentTab("register");
    }
  }, [location.pathname]);

  const handleTabChange = (value: string) => {
    if (value === "login") {
      nav("/login");
    } else if (value === "register") {
      nav("/register");
    }
  };

  const handleLoginSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError("");
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const data: LoginData = {
      username,
      password,
    };

    try {
      const res = await myAxios.post("/api/auth/login", data);
      updateUser(res.data.data); // Assuming updateUser is a function that updates user state
      nav("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data?.errors;
        if (typeof errorMessage !== "string")
          errorMessage = error.response?.data?.errors[0]?.message;
        setLoginError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setRegisterError("");
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const data: RegisterFormData = {
      username,
      email,
      password,
    };

    try {
      await myAxios.post("/api/auth/register", data);
      nav("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = error.response?.data?.errors;
        if (typeof errorMessage !== "string")
          errorMessage = error.response?.data?.errors[0]?.message;
        setRegisterError(errorMessage);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex pt-4">
      <div className="hidden lg:block lg:basis-2/5 bg-[#84DCC6] relative">
        <img
          className="absolute w-[115%] left-0 scale-x-[-1]"
          src="/bg.png"
          alt=""
        />
      </div>
      <div className="basis-3/5 grid place-items-center">
        <Tabs
          value={currentTab}
          className="w-[500px] content-center justify-end"
          onValueChange={handleTabChange}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  If you have an account, please log in to access your
                  dashboard.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLoginSubmit}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" name="username" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log in"}
                  </Button>
                  {loginError && (
                    <div className="text-red-500">{loginError}</div>
                  )}
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>
                  Don't have an account yet? Register now to get started.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegisterSubmit}>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" name="username" type="text" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                  {registerError && (
                    <div className="text-red-500">{registerError}</div>
                  )}
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
