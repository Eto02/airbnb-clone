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
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function AuthPage() {
  const navigate = useNavigate();
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
      navigate("/login");
    } else if (value === "register") {
      navigate("/register");
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
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
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
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="text" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
