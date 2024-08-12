import { useState } from "react";
import Divider from "./Divider";

import AgeForm from "./AgeForm";
import OutputDisplay from "./OutputDisplay";
const App = () => {
  const [age, setAge] = useState([]);
  const [Error, setError] = useState();
  function handleAge(item) {
    setAge((items) => [...items, item]);
  }

  return (
    <div className="bg-Lightgrey min-h-screen flex items-center justify-center text-[32px] font-Poppins font-[poppins] xs:grid xs:place-content-center">
      <main className="bg-White md:p-10  relative rounded-t-2xl rounded-bl-2xl rounded-br-[8rem] shadow-md xs:p-4">
        <AgeForm Error={Error} handleAge={handleAge} />
        <Divider />
        <OutputDisplay />
      </main>
    </div>
  );
};

export default App;
