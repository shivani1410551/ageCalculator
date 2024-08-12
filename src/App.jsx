import { useState, useRef, useEffect } from "react";
import AgeInput from "./AgeInput";
import Divider from "./Divider";
import OutputData from "./OutputData";
import OutputBlock from "./OutputBlock";
const App = () => {
  const [birthDay, setBirthDay] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState([]);
  const [Error, setError] = useState();
  console.log(birthDay, birthYear, birthMonth);
  const inputRef_1 = useRef(null);
  const inputRef_2 = useRef(null);
  const inputRef_3 = useRef(null);
  const labelRef_1 = useRef(null);
  const labelRef_2 = useRef(null);
  const labelRef_3 = useRef(null);
  function Init() {
    labelRef_1.current && labelRef_1.current.classList.add("labelError");
    labelRef_2.current && labelRef_2.current.classList.add("labelError");
    labelRef_3.current && labelRef_3.current.classList.add("labelError");

    inputRef_1.current && inputRef_1.current.classList.add("inputError");
    inputRef_2.current && inputRef_2.current.classList.add("inputError");
    inputRef_3.current && inputRef_3.current.classList.add("inputError");
  }
  // handle form
  function handleSubmit(e) {
    e.preventDefault();
    handleFocus();
  }
  useEffect(() => {
    // Focus the input element when the component mounts
    inputRef_1.current.focus();
  }, []);
  const handleFocus = (inputNumber) => {
    if (inputNumber === 1) {
      inputRef_1.current.focus();
    } else if (inputNumber === 2) {
      inputRef_2.current.focus();
    } else if (inputNumber === 3) {
      inputRef_3.current.focus();
    }
  };
  return (
    <div className="bg-Lightgrey min-h-screen flex items-center justify-center text-[32px] font-Poppins font-[poppins] xs:grid xs:place-content-center">
      <main className="bg-White md:p-10  relative rounded-t-2xl rounded-bl-2xl rounded-br-[8rem] shadow-md xs:p-4">
        <form
          action="#"
          onSubmit={handleSubmit}
          className="input-box flex items-center md:mb-10 xs:mb-10"
        >
          <AgeInput
            handleFocus={handleFocus}
            LabelClassName="label"
            name="day"
            placeholder="DD"
            inputClassName="inputStyle"
            num="1"
            labelRef={labelRef_1}
            inputRef={inputRef_1}
            Error={Error}
            birthDate={birthDay}
            setBirthDate={setBirthDay}
          />
          <AgeInput
            handleFocus={handleFocus}
            name="month"
            placeholder="MM"
            inputClassName="inputStyle"
            LabelClassName="label"
            num="2"
            labelRef={labelRef_2}
            inputRef={inputRef_2}
            Error={Error}
            birthDate={birthMonth}
            setBirthDate={setBirthMonth}
          />
          <AgeInput
            handleFocus={handleFocus}
            LabelClassName="label"
            name="year"
            placeholder="YYYY"
            inputClassName="inputStyle"
            num="3"
            labelRef={labelRef_3}
            inputRef={inputRef_3}
            Error={Error}
            birthDate={birthYear}
            setBirthDate={setBirthYear}
          />
        </form>

        <Divider />

        <div className="output-box md:-mt-4 xs:-mt-3">
          {OutputData.map((item) => (
            <OutputBlock key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
