// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';
import Buttons from "./buttons.jsx";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("linear-gradient(to right, cyan, blue)");
  const colors = ["red", "green", "blue", "olive", "gray", "yellow", "indigo", "pink", "purple", "lavender", "white", "black",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center bg-white gap-3 shadow-lg px-3 py-2 rounded-3xl">

            {colors.map((color) => {
              return <Buttons key={color} color={color} setColor={setColor} />;
            })}

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
