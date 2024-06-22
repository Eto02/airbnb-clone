import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="h-full flex">
      <div className="basis-3/5 h-full flex items-center justify-center">
        <form className="flex flex-col gap-5">
          <h1>Welcome back</h1>
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="p-3 rounded border-0 bg-[teal] text-white font-bold cursor-pointer">
            Login
          </button>
          <Link className="text-sm text-gray-border-gray-400" to="/register">
            {"Don't"} you have an account?
          </Link>
        </form>
      </div>
      <div className="relative basis-2/5 flex bg-[#84DCC6] items-center justify-center">
        <img className="w-[115%] absolute" src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
