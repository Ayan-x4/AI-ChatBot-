import React from "react";
import Navbar from "./components/Navbar";
import MessageContext from "./Context/MessageContext";

const App = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-black ">
      <img
        src="https://wallpapercave.com/wp/wp9276241.jpg
"
        alt="Background"
        className="fixed inset-0 z-[0] h-full w-full object-cover"
      />

      <div className="flex h-[85vh] w-1/2 flex-col overflow-hidden rounded-2xl border border-white/20  shadow-lg shadow-gray-500/30 backdrop-blur-sm">
        <div className="shrink-0">
          <Navbar />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
          <MessageContext />
        </div>
      </div>
    </div>
  );
};

export default App;
