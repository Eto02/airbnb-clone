import Navbar from "./component/Navbar";
import HomPage from "./routes/HomePage";

function App() {
  return (
    <div className="bg-[#FF0000] md:bg-[#6495ed] lg:bg-[#ff4040] xl:bg-[#fff]  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  h-screen   mx-auto px-5">
      <Navbar />
      <div style={{ height: "calc(100vh - 100px)" }}>
        <HomPage />
      </div>
    </div>
  );
}

export default App;
