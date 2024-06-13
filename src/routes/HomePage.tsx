import SearchBar from "../component/SearchBar";

const HomPage = () => {
  return (
    <div className="flex h-full ">
      <div className="basis-3/5">
        <div className=" pr-[100px] flex flex-col justify-center gap-[50px] h-full ">
          <h1 className="text-[64px]">
            Find Real Estate & Get Your Dream Place
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rem
            minus inventore enim tempore fugiat quia iure repellendus
            necessitatibus dolor, magnam dignissimos magni blanditiis, doloribus
            repellat consequuntur sequi vel! Beatae.
          </p>
          <SearchBar />
          <div className="flex justify-between ">
            <div>
              <h1 className="text-[36px]">16+</h1>
              <h2 className="text-[20px] font-light">Years of Experience</h2>
            </div>
            <div>
              <h1 className="text-[36px]">200</h1>
              <h2 className="text-[20px] font-light">Award Gained</h2>
            </div>
            <div>
              <h1 className="text-[36px]">1200+</h1>
              <h2 className="text-[20px] font-light">Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6] relative">
        <img className="absolute w-[115%] right-0 " src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomPage;
