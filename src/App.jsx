import { useState } from "react";
import Divider from "./Divider";

import AgeForm from "./AgeForm";
import OutputDisplay from "./OutputDisplay";
const App = () => {
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  return (
    <div className="bg-Lightgrey min-h-screen flex items-center justify-center text-[32px] font-Poppins font-[poppins] xs:grid xs:place-content-center">
      <main className="bg-White md:p-10  relative rounded-t-2xl rounded-bl-2xl rounded-br-[8rem] shadow-md xs:p-4">
        <AgeForm age={age} setAge={setAge} />
        <Divider />
        <OutputDisplay
          birthYears={age.years}
          birthMonth={age.months}
          birthDay={age.days}
        />
      </main>
    </div>
  );
};

export default App;
