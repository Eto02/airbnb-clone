const Navbar = () => {
    return ( 
        <nav className="flex justify-between items-center h-[100px]">
            <div className="basis-3/5 flex items-center gap-[50px]" >
               <a href="/" className=" transform hover:scale-105 transition-all duration-400 ease-in font-bold text-[20px] flex items-center  gap-[10px] ">
                <img className="w-[28px]" src="https://pbs.twimg.com/profile_images/1604935435007901696/BpgKDmvE_400x400.jpg"></img>
                <span>{import.meta.env.VITE_APP_NAME}</span>
               </a>
               <a className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in" href="/">Home</a>
               <a className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in" href="/">About</a>
               <a className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in" href="/">Contact</a>
               <a className="hidden md:block transform hover:scale-105 transition-all duration-400 ease-in" href="/">Agents</a>
            </div>
            <div  className="basis-2/5 flex items-center justify-end bg-[#fcf5f3] h-100">
                <a className="hidden md:block px-[12px] py-[24px] transform hover:scale-105 transition-all duration-400 ease-in" href="/">Sign in</a>
                <a className="hidden md:block px-[12px] py-[24px] transform hover:scale-105 transition-all duration-400 ease-in"  href="/">Sign up</a>
            </div>
        </nav>
    );
}
 
export default Navbar;