import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <header className="flex justify-center">
        <div className="main-header py-4 px-4 pr-9 pl-9 mt-4 mb-4 font-bold text-white font bg-[#6550E5] rounded-2xl text-[22px]">
          UrNotes
        </div>
      </header>
      <Notes />
    </>
  );
}

export default App;
