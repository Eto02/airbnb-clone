import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
  };

  return (
    <div className="h-full flex">
      <div className="basis-3/5 h-full flex items-center justify-center">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="username"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="email"
            type="text"
            placeholder="Email"
          />
          <input
            className="p-2 border-1 border-solid border-gray-400 rounded"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button className="p-3 rounded border-0 bg-[teal] text-white font-bold cursor-pointer">
            Register
          </button>
          <Link className="text-sm text-gray-border-gray-400 " to="/login">
            Do you have an account?
          </Link>
        </form>
      </div>
      <div className="relative basis-2/5 flex bg-[#84DCC6] items-center justify-center">
        <img className="w-[115%] absolute" src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Register;
