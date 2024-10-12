
import MainSection from "./Components/MainSection/MainSection";
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <>
      <div className="bg-black text-white relative h-full m-0 p-0 overflow-hidden overscroll-none">
        <Navbar />
        <MainSection />
      </div>
    </>
  );
}

export default App
